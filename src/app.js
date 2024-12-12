import "./style.css";

function generateCard() {
  let cardValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♠", "♣", "♥", "♦"];
  // Randomly select the card values and suits
  let randomIndex = array => Math.floor(Math.random() * array.length);

  //Ramdomly selects a card value from the cardValues array and suit from the suits array
  let cardValuesSelection = cardValues[randomIndex(cardValues)];
  let suitSelection = suits[randomIndex(suits)];

  //conection js con html
  document.getElementById("card-values").innerHTML = cardValuesSelection;
  document.getElementById("card-iconos1").innerHTML = suitSelection;
  document.getElementById("card-iconos2").innerHTML = suitSelection;

  // change color red suit is heart or diamond
  if (suitSelection === "♥" || suitSelection === "♦") {
    document.getElementById("card-iconos1").classList.add("red");
    document.getElementById("card-iconos2").classList.add("red");
  } else {
    document.getElementById("card-iconos1").classList.remove("red");
    document.getElementById("card-iconos2").classList.remove("red");
  }
}
function changeCard() {
  let width = parseInt(document.getElementById("card-width").value);
  let height = parseInt(document.getElementById("card-height").value);
  document.getElementById("card").style.width = width > 0 ? `${width}px` : " ";
  document.getElementById("card").style.height =
    height > 0 ? `${height}px` : " ";
}

document.getElementById("card-width").addEventListener("input", changeCard);
document.getElementById("card-height").addEventListener("input", changeCard);
window.onload = function() {
  generateCard();
  setInterval(generateCard, 10000);
  Temporizador(10); // Starts the timer at 10 seconds
};

const temporizador = document.getElementById("temporizador");

function Temporizador(seconds) {
  if (seconds > 0) {
    temporizador.textContent = `${seconds} seconds`; // Displays the number followed by "seconds"
    setTimeout(() => {
      Temporizador(seconds - 1);
    }, 1000);
  } else {
    Temporizador(10); // Restarts the timer from 10
  }
}
