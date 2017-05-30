$(document)

    .ready(function () {

    var template = $('#template').clone();

    $('#searchMovie').on('click',  function () {


        var ali = $('#movieTitle').val();
        $.ajax({
            type: "POST",
            url: 'https://www.omdbapi.com/?t=' + ali + '&y=&plot=full&r=json',
            dataType: 'json',
            success: function (movies) {
                $('#container').empty();
                console.log(movies);
                var row = "";
                row += "<tr><td>" + movies.imdbID + " </td>"
                          + "<td>" + movies.Title + "</td>"

                         + "<td>" + movies.Plot + " </td>"
                         + "<td> <img src=" + movies.Poster + "/></td></tr>";

                console.log(movies);
                $('#container').append(row);
                $('#btnAdd').on('click', function () {

                    apiyegonder(movies);
                    location.reload();

                });



            }
        });
    });
    // parametreli fonksiyon apiyegonder
    apiyegonder = function (film) {
        var bilgiler = Object();
        bilgiler.ImdbID = film.imdbID;
        bilgiler.Title = film.Title;
        bilgiler.Plot = film.Plot;
       

        $.ajax({
            type: "post",
            dataType: "json",
            data: bilgiler,
            url: "http://localhost:51671/api/Imdb/AddFilm",

            success: function (data) {
                console.log(bilgiler);
                if (data == "Succ") {
                    alert("Eklendi");

                }
                $('#container').empty();
            },
            error: function (xhr, textStatus, errorThrow,exception) {

               // alert(xhr.status + " " + xhr.statusText);
                if (xhr.status == 409) {
                    alert("Sistemde bu kayıt bulunmaktadır");
                }
                //else
                //    alert(xhr.status + " " + xhr.statusText);
            }
           
        });
    }
});

//for (var i = 0; i < movies.length; i++) {
//    console.log(movies[i].Title + "-" + movies[i].Plot);
//    row += "<tr><td>" + movies[i].Title +
//       " </td><td>" + movies[i].Plot +
//        " </td><td>" + movies[i].Poster +
//        "</td></tr>";

//$("<tr><td>" + movies.Title +
//   " </td><td>" + movies.Plot +
//    " </td><td>" + movies.Poster +
//    "</td></tr>").appendTo('#results');
//};
//$('#container').append(trhtml);
//for (var i = 0; i < movies.lenght; i++) {
//    document.write("<tr><td>" + movies[i].title + '</td>'
//                    + '<td><tr>' + movies[i].plot + '</td>'
//                    + '<td><tr>' + movies[i].posterUrl + '</td></tr>'

//        );
//}


//for (var i = 0; i < movies.length; i++) {
//    var movie = movies[i];
//    var title = movie.Title;
//    var plot = movie.Plot;
//    var posterUrl = movie.Poster;
//    console.log(title + "-" + plot + "-" + posterUrl);
//    var tr = template.clone();
//    tr.find(".plot").html(plot);
//    tr.find(".poster").attr("src", posterUrl);
//    tr.find(".link").html(title);
//    tbody.append(tr);
//}


// }

//});


