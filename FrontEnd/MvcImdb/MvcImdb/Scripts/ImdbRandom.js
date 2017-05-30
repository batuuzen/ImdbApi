$(document).ready(function () {
   
   
    function apiCall() {
        var randomNumber = Math.floor((Math.random() * 100000));

        
        var randomFilm = "tt10" + randomNumber;
        console.log(randomFilm);
            console.log("döngünün içi "+randomNumber);
            $.getJSON('https://www.omdbapi.com/?i=' + encodeURI(randomFilm)).then(function (response) {
                console.log(response);

                var image = response.Poster;
                var Title = response.Title;
                if ("Title" in response) {
                    if (image != "N/A" && Title != "undefined") {
                        $('img').attr('src', image);
                        var row = "";
                        $('#container').empty();

                        row += "<tr><td>" + response.Title + "</td></tr>";
                        $('#container').append(row);

                    } else {
                        apiCall();
                    }
                } else {
                    apiCall();
                }
                
            });
         
    }

    $('button').click(function () {
        apiCall();
    });
});