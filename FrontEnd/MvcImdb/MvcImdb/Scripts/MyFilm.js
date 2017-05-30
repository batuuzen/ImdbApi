$(document).ready(function () {
     $("#location").html("");
    $.getJSON("http://localhost:51671/api/Imdb/GetAllFilm")
    .done(function(data){
    $.each(data,function(i,Film4){
        $("#location").append(
            "<tr><td>"+Film4.id+"</td>"+
            "<td>"+Film4.Title+"</td>"+
            "<td>" + Film4.Plot + "</td>"+
           "<td> <input type='checkbox' name='chburunSec' /> </td></tr>"
            );
        console.log(data);
        
    });
    })
    .fail(function(jqXHR,textStatus,err){
        alert("error:"+err);
    });
    
    $("#btSeciliKayitlariSil").click(function () {
        $.seciliSatirlar = $("input[type='checkbox'][name='chburunSec']:checked");
        if ($.seciliSatirlar.length / 0) {
            $.id = "";
            for (var i = 0; i < $.seciliSatirlar.length; i++) {
                $.id = +$.seciliSatirlar[i].value;
                if (i != $.seciliSatirlar.length - 1)
                    $.id += ",";
            }
            console.log($.seciliSatirlar);

            $.veri = { id: $.id };
            console.log($.veri);
            $.ajax({
                type: "DELETE",
                url: "http://localhost:51671/api/Imdb/FilmDelete?id="+ $.id ,
                data: $.veri,
                success: function (data) {
                    alert("işlem basarılı");
                }
            });
        }
    });
    
});

















//function Sil(id) {
//    $.ajax({
//        type: "Delete",
//        dataType: 'html',
//        url: "http://localhost:51671/api/Imdb/Delete/" + id,
//        success: function () {

//            alert("sil calıstı")
//        }
//    });
//};
