using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using React.Redux.API.Models;
using React.Redux.API.Services.Favorites;
using System.Security.Claims;

namespace React.Redux.API.Controllers
{
    [Authorize]
    [Route("favorites")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private readonly FavoritesService _favoritesService;

        public FavoritesController(FavoritesService favoritesService)
        {
            _favoritesService = favoritesService;
        }

        [HttpGet("{id}")]
        public IActionResult GetFavorite(int id)
        {
            var response = _favoritesService.GetFavoriteById(id);
            if (response == null)
            {
                return NotFound();
            }
            return Ok(response);
        }

        [HttpGet]
        public IActionResult GetFavoritesByUser()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var favorites = _favoritesService.GetFavorites(userId);
            return Ok(favorites);
        }

        [HttpPost]
        public IActionResult AddFavorite([FromBody] int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            ResponseModel response = _favoritesService.AddFavorite(userId, id);

            return Ok(response);
        }

        [HttpDelete]
        public IActionResult RemoveFavorite([FromBody] int id)
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            ResponseModel response = _favoritesService.RemoveFavorite(userId, id);
            return Ok(response);
        }
    }
}