$(document).ready(function () {
    $("#btn").click(function () {

       var data = $("#form").serialize();
       var text = $("#text").val();
       
       $.ajax({
           type: "post",
           url:  "php/main.php",
           data: data,
           success:function (r) {
               if (r==1) {
                   Swal.fire({
                       icon: 'success',
                       title: '¡Pálindromo!',
                       text: 'La palabra "'+ text +  '" es un pálindormo',
                   });
               }else{
                   Swal.fire({
                       icon: 'error',
                       title: 'No es un pálindromo',
                       text: 'La palabra "'+ text +  '" no un pálindormo',
                   });
               }
           }
       });
       return false;
       
    });
});