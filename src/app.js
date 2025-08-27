import "bootstrap";
import "./style.css";

const iconsCard = ["♦", "♥", "♠", "♣"]; //Palos
const numberCard = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]; //Valores

// Cambios en el para centrar la carta y poner el fondo verde
let body = document.body;
body.style.backgroundColor = "green";
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

// Obtener el contenedor principal
let letterContent = document.getElementById("letterContent");
letterContent.classList.add("my-card");
letterContent.style.padding = "0";

// Limpiar el contenido anterior (al recargar)
function generateCard() {
    letterContent.innerHTML = "";

    // Elegir un palo y un valo aleatorios 
    let randomIcon = iconsCard[Math.floor(Math.random() * iconsCard.length)];
    let randomNumber = numberCard[Math.floor(Math.random() * numberCard.length)];

    // Crear el div que contiene el palo superior izquierdo 
    let divTop = document.createElement("div");
    divTop.textContent = randomIcon;
    divTop.style.position = "relative";
    divTop.style.left = "25px";
    divTop.style.fontSize = "150px";
    divTop.style.lineHeight = "1.1";
    divTop.style.display = "inline-block";

    letterContent.appendChild(divTop);


    // Crear el div para el valor en el centro
    let divMiddle = document.createElement("div");
    divMiddle.textContent = randomNumber;
    divMiddle.style.textAlign = "center";
    divMiddle.style.fontSize = "180px";
    divMiddle.style.fontFamily = "'Times New Roman', serif";
    letterContent.appendChild(divMiddle);

    // crear el div que contiene el palo inferir izquierdo 
    let divBottom = document.createElement("div")
    divBottom.textContent = randomIcon;
    divBottom.style.position = "absolute";
    divBottom.style.fontSize = "150px";
    divBottom.style.right = "25px";
    divBottom.style.bottom = "20px";
    divBottom.style.lineHeight = "1.1";
    divBottom.style.display = "inline-block";
    letterContent.appendChild(divBottom);

    // Definir el color según el palo 
    if (randomIcon === "♦" || randomIcon === "♥") {
        divTop.style.color = "red";
        divBottom.style.color = "red";
    } else {
        divTop.style.color = "black";
        divBottom.style.color = "black";
    }

}

// Generar carta al cargar
generateCard();

// Agregar evento al botón
const btn = document.getElementById("newCardBtn");
btn.addEventListener("click", generateCard);