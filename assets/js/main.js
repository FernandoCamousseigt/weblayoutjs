var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {
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
