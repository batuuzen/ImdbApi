using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImdbApiBackEnd.Models
{
    public class MyFilm
    {
        public int id { get; set; }

        public string ImdbID { get; set; }
        public string Title { get; set; }
        public string Plot { get; set; }
    }
}