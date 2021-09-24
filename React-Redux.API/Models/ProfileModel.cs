using System;

namespace React.Redux.API.Models
{
    public class ProfileModel
    {
        public string Username { get; set; }

        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime BirthDate { get; set; }

        public string Token { get; set; }

        public string UrlPhoto { get; set; }
    }
}