$(document).ready(function () {
  $("#generate").on("click", function () {
    let numeros = [];
    let qtdeNumeros = $("#qtdeNumeros").val();
    for (let i = 0; i < qtdeNumeros; i++) {
      numeros.push(generateRandomNumber());
    }
    inserirBolasComNumeros(numeros);
  });
});

function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

function inserirBolasComNumeros(arrayNumeros) {
  const container = document.getElementById("bolaContainer");
  container.innerHTML = "";

  arrayNumeros.forEach((numero) => {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = getRandomColor();
    ball.textContent = numero;
    container.appendChild(ball);
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}