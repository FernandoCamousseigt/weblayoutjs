$(function () {
    $('[data-toggle="popover"]').popover();
    $('#enviarCorreo').click(function(){
       alert("El correo fue enviado correctamente...");
    }
  )
  $('.titulo1,.titulo2').on("dblclick",function(){
    $(this).css({
    "color": "red",
      });
    });
    $('.sbt1').click(function(){
        $('.ct1').toggle();
      });   
      $('.sbt2').click(function(){
        $('.ct2').toggle();
      });   
      $('.sbt3').click(function(){
        $('.ct3').toggle();
      });   
})