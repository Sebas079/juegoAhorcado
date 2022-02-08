//canvas
var pantalla = document.querySelector(".ahorcado");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "rgb(75,40,150)";
pincel.fillRect(0, 0, 968, 780);
// Base ahorcado

pincel.beginPath();
pincel.moveTo(150, 250);
pincel.lineTo(150, 300);
pincel.fillStyle = "#fff";
pincel.fill();
// funcion para jugar
function jugar(word){
  let wordGame = word.toUpperCase();
  wordGame.split("");
  let letra = capturarLetra();
  console.log(letra);
  
  for(let x = 0 ; x < wordGame.length ; x++){
    console.log(wordGame[x])
  }
  

 
   
     } 
    
// funcion dibujar ahorcado
