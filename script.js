$(document).ready(function () {
  $("#generate").on("click", function () {
    let numeros = [];
    let qtdeNumeros = $("#qtdeNumeros").val();
    for (let i = 0; i < qtdeNumeros; i++) {
      numeros.push(generateRandomNumber());
    }
    inserirBolasComNumeros(numeros);
  });

  // Event listener para o botão de ordenação
  $("#sortButton").on("click", function () {
    sortNumbers();
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

function sortNumbers() {
  const container = document.getElementById("bolaContainer");
  const balls = Array.from(container.querySelectorAll(".ball"));

  const sortedBalls = balls.sort((a, b) => {
    const numberA = parseInt(a.textContent);
    const numberB = parseInt(b.textContent);

    return numberA - numberB;
  });

  balls.forEach((ball, index) => {
    setTimeout(() => {
      ball.classList.add("fade-out");
    }, 500 * index);
  });

  setTimeout(() => {
    sortedBalls.forEach((ball, index) => {
      container.appendChild(ball);
      setTimeout(() => {
        ball.classList.remove("fade-out");
      }, 50 * index);
    });
  }, 1000);
}
