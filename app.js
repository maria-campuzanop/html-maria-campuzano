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
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);

      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  //----------------- lecture_04 ----------------------------------//

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }

  crearTablero();
});
