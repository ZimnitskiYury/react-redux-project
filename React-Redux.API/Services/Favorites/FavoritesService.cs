using React.Redux.API.Entities;
using React.Redux.API.Models;
using System;
using System.Linq;

namespace React.Redux.API.Services.Favorites
{
    public class FavoritesService
    {
        private readonly UserDbContext _userDb;

        public FavoritesService(UserDbContext userDb)
        {
            _userDb = userDb;
        }

        public FavoriteBeer GetFavoriteById(int favoriteId)
        {
            FavoriteBeer entity = _userDb.FavoriteBeers.Find(favoriteId);

            return entity;
        }

        public IQueryable<FavoriteBeer> GetFavorites(string userId)
        {
            return _userDb.FavoriteBeers.Where(x => x.UserId == userId);
        }

        public ResponseModel AddFavorite(string userId, int beerId)
        {
            FavoriteBeer entity = new()
            {
                UserId = userId,
                BeerId = beerId
            };

            _userDb.FavoriteBeers.Add(entity);

            try
            {
                _userDb.SaveChanges();
            }
            catch
            {
                return new ResponseModel { Status = ResponseStatus.Error };
            }

            return new ResponseModel { Status = ResponseStatus.Success };
        }

        public ResponseModel RemoveFavorite(string user, int favoriteId)
        {
            FavoriteBeer entity = _userDb.FavoriteBeers.First(x => x.BeerId == favoriteId && x.UserId == user);

            _userDb.FavoriteBeers.Remove(entity);

            try
            {
                _userDb.SaveChanges();
            }
            catch (Exception ex)
            {
                return new ResponseModel { Status = ResponseStatus.Error, Message = ex.Message };
            }

            return new ResponseModel { Status = ResponseStatus.Success, Message = $"Favorite Beer with Id:{entity.Id} has been removed" };
        }
    }
}