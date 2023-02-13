//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "Alegrosita.jpg", img: "images/Alegrosita.jpg" },
    { name: "Armoniosita.jpg", img: "images/Armoniosita.jpg" },
    { name: "Divertosito.jpg", img: "images/Divertosito.jpg" },
    { name: "Revoltosito.jpg", img: "images/Revoltosito.jpg" },
    { name: "Sincerosita.jpg", img: "images/Sincerosita.jpg" },
    { name: "suerte.jpg", img: "images/suerte.jpg" },
    { name: "Alegrosita.jpg", img: "images/Alegrosita.jpg.png" },
    { name: "Armoniosita.jpg", img: "images/Armoniosita.jpg.png" },
    { name: "Divertosito.jpg", img: "images/Divertosito.jpg.png" },
    { name: "Revoltosito.jpg", img: "images/Revoltosito.jpg" },
    { name: "Sincerosita.jpg", img: "images/Sincerosita.jpg" },
    { name: "suerte.jpg", img: "images/suerte.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
      // cuando i=cardAdj.length, es decir, 12.
      var carta = document.createElement("img"); // Crea elemento img cada vez que se ejecuta la función.
      carta.setAttribute("src", "images/reverso.png"); //Asignar nuevo atributo a cada carta
      //igual a la imagen 'reverso'.
      carta.setAttribute("data-id", i); //Asignar como atributo a cada carta creada, el id=i.
      carta.addEventListener("click", voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta
      //la función voltearCarta.
      cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
      // cuadricula de html para que se imprima la carta creada en el div de html.
    }
  }
});
