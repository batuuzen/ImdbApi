using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ImdbApiBackEnd.Models;
using System.Web.Routing;
using Newtonsoft.Json;
namespace ImdbApiBackEnd.Controllers
{
    public class ImdbController : ApiController
    {
        ImdbApiEntities2 db = new ImdbApiEntities2();
       
        public List<MyFilm> GetAllFilm()
        {
            List<MyFilm> filmlist = db.Film4.Select(x => new MyFilm()
            {
                id = x.id,
                ImdbID = x.ImdbID,
                Title = x.Title,
                Plot = x.Plot
            }).OrderByDescending(x => x.id).ToList();

            return filmlist;
        }
        

        [HttpPost]

        public IHttpActionResult AddFilm(MyFilm _model)
        {
            Film4 film = new Film4()
            {
                ImdbID = _model.ImdbID,
                Title = _model.Title,
                Plot = _model.Plot
            };
            if (db.Film4.Where(u => u.ImdbID == _model.ImdbID).Count() == 0)
            {
                db.Film4.Add(film);
                db.SaveChanges();

                return Json("Succ");
            }
            else
                return Conflict();
        }
        
       [HttpDelete]
   
       public HttpResponseMessage FilmDelete(int id)
        {
            try
            {
                var response = new HttpResponseMessage(HttpStatusCode.OK);
                var film4 = db.Film4.SingleOrDefault(x => x.id == id);
                db.Film4.Remove(film4);
                db.SaveChanges();
                return response;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
          
    }
}
