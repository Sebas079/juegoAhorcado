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

function dibujarCabeza(){
    pincel.beginPath();
pincel.strokeStyle = "rgb(10, 10, 119)";
pincel.arc(505, 140, 50, 0, Math.PI * 2);
pincel.lineWidth = 5;
pincel.stroke();

}


function dibujarTorzo(){
    pincel.beginPath()
    pincel.fillStyle = "rgb(10, 10, 119)";
    pincel.fillRect(505, 190, 5, 120);
    pincel.closePath();
}
    

 
function dibujarBrazoDer() {
    pincel.beginPath();
    pincel.moveTo(505, 210)
    pincel.lineTo(555, 260 );
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.stroke();
    pincel.closePath();
}
   
function dibujarBrazoiz(){
    pincel.beginPath();
     pincel.moveTo(510, 210)
     pincel.lineTo(455, 260 );
     pincel.strokeStyle = "rgb(10, 10, 119)";
     pincel.stroke();
     pincel.closePath();
}
    

function dibujarPiernaDer(){
    pincel.beginPath();
    pincel.moveTo(510, 305)
    pincel.lineTo(555, 360 );
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.lineWidth = 5;
    pincel.stroke();
    pincel.closePath();
}
    

function dibujarPiernaIzq(){
    pincel.beginPath();
    pincel.moveTo(505, 305)
    pincel.lineTo(455, 360 );
    pincel.strokeStyle = "rgb(10, 10, 119)";
    pincel.stroke();
    pincel.closePath();
}

/*
 case 7:

     
 case 8:
     pincel.fillStyle = "rgb(10, 10, 119)";
     pincel.beginPath();
     pincel.moveTo(505, 305)
     pincel.lineTo(555, 360)
     pincel.lineTo(555, 380)
     pincel.fill()
     break;
 case 9:
     pincel.fillStyle = "rgb(10, 10, 119)";
     pincel.beginPath();
     pincel.moveTo(505, 305)
     pincel.lineTo(455, 360)
     pincel.lineTo(455, 380)
     pincel.fill()
     break;
}

}*//*
var count = 40;
function dibujarLineasPalabra() {

    for (let x = 0; x < palabraSecreta.length; x++) {
        pincel.fillStyle = "rgb(10, 10, 119)";
        pincel.beginPath();
        pincel.moveTo(count, 650)
        pincel.fillRect(count, 650, 60, 10);
        count += 70;


    }*/


//}
function letraAcertada() {

}


