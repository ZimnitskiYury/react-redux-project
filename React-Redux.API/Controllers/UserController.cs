using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using React.Redux.API.Entities;
using React.Redux.API.Models;
using React.Redux.API.Services.Jwt;
using System.Threading.Tasks;

namespace React.Redux.API.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly JwtTokenService _jwtTokenService;

        public AuthController(UserManager<User> userManager,
                              RoleManager<IdentityRole> roleManager,
                              SignInManager<User> signInManager,
                              JwtTokenService jwtTokenService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _jwtTokenService = jwtTokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);
            if (result.Succeeded)
            {
                var user = await _userManager.FindByNameAsync(model.Username);
                var roles = await _userManager.GetRolesAsync(user);
                var token = _jwtTokenService.GetToken(user, roles);
                var profile = new ProfileModel
                {
                    Username = user.UserName,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    BirthDate = user.BirthDate,
                    Token = token,
                };
                return Ok(profile);
            }

            return Forbid();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                UserName = model.Username,
                BirthDate = model.BirthDate,
            };

            await CreateRoleIfNotExists("Admin");
            await CreateRoleIfNotExists("User");

            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                switch (model.Username)
                {
                    case "Admin":
                        {
                            await _userManager.AddToRoleAsync(user, "Admin");
                            break;
                        }

                    default:
                        {
                            await _userManager.AddToRoleAsync(user, "User");
                            break;
                        }
                }

                var roles = await _userManager.GetRolesAsync(user);
                var token = _jwtTokenService.GetToken(user, roles);
                var profile = new ProfileModel
                {
                    Username = user.UserName,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    BirthDate = user.BirthDate,
                    Token = token,
                };
                return Ok(profile);
            }

            return BadRequest(result.Errors);
        }

        [AllowAnonymous]
        [HttpGet("validate")]
        public IActionResult Validate(string token)
        {
            return _jwtTokenService.ValidateToken(token) ? Ok() : (IActionResult)Forbid();
        }

        #region Helpers

        private async Task CreateRoleIfNotExists(string role)
        {
            if (!await _roleManager.RoleExistsAsync(role))
            {
                await _roleManager.CreateAsync(new IdentityRole(role));
            }
        }

        #endregion Helpers
    }
}