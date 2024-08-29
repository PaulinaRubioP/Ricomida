
/*tooltip*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*alert con id*/
$(document).ready(function () {
  $('#botonAlerta').click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

/*Selectores de etiqueta*/
$(document).ready(function () {
  $("h4").dblclick(function () {
    $(this).css({
      "color": "red",

    });
  });


  /*Selectores de clase*/
  $("#cards1, #cards2, #cards3").on("click", function () {
    $(".card-body").toggle("slow", function () {
      // Animation complete.
    });
  });

});
 








