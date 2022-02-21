//canvas
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
//var ctx = pantalla.getContext("2d");

pincel.fillStyle = "rgb(214, 241, 242)";
pincel.fillRect(0, 0, 968, 780);
// Base ahorcado

pincel.fillStyle = "rgb(10, 10, 119)";
pincel.beginPath();
pincel.fillRect(100, 40, 13, 500);
pincel.closePath();

pincel.fillStyle = "rgb(10, 10, 119)";
pincel.beginPath();
pincel.fillRect(73, 530, 500, 13);
pincel.closePath();

pincel.fillStyle = "rgb(10, 10, 119)";
pincel.beginPath();
pincel.fillRect(100, 40, 300, 10);
pincel.closePath();

pincel.fillStyle = "rgb(10, 10, 119)";
pincel.beginPath();
pincel.fillRect(100, 40, 400, 10);
pincel.closePath();

pincel.fillStyle = "rgb(10, 10, 119)";
pincel.beginPath();
pincel.fillRect(500, 40, 10, 50);
pincel.closePath();




// funciones para dibujar ahorcado*/

function dibujarCabeza() {
    pincel.beginPath();
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.arc(505, 140, 50, 0, Math.PI * 2);
    pincel.lineWidth = 5;
    pincel.stroke();

}


function dibujarTorzo() {
    pincel.beginPath()
    pincel.fillStyle = "rgb(10, 10, 119)";
    pincel.fillRect(505, 190, 5, 120);
    pincel.closePath();
}



function dibujarBrazoDer() {
    pincel.beginPath();
    pincel.moveTo(505, 210)
    pincel.lineTo(555, 260);
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoiz() {
    pincel.beginPath();
    pincel.moveTo(510, 210)
    pincel.lineTo(455, 260);
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.stroke();
    pincel.closePath();
}


function dibujarPiernaDer() {
    pincel.beginPath();
    pincel.moveTo(510, 305)
    pincel.lineTo(555, 360);
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath();
}


function dibujarPiernaIzq() {
    pincel.beginPath();
    pincel.moveTo(505, 305)
    pincel.lineTo(455, 360);
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.stroke();
    pincel.closePath();
}

function letrasFall() {
    let letra = letrasErradas;
    let x = 580;
    var y = 580;
    var mov = 0;
    console.log(letra)
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    for (let i = 0; i < letra.length; i++) {
        
        console.log(y);
        pincel.font = "70px Calibri";
        pincel.fillStyle = "rgb(10, 10, 119)";
        pincel.fillText(letra, x, y);
      
        
    }
    
}
function loser() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var text=("Ups,intentalo de nuevo!!!")
    pincel.font = "80px Calibri";
    pincel.fillStyle = "rgb(255, 80, 119)";
    pincel.fillText(text,10, 300);
}
function win() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var text=("Genial, jugamos de nuevo?!!")
    pincel.font = "80px Calibri";
    pincel.fillStyle = "rgb(255, 18, 119)";
    pincel.fillText(text,10, 300);
}


