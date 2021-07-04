using Microsoft.AspNetCore.Identity;
using System;

namespace React.Redux.API.Entities
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime BirthDate { get; set; }
    }
}