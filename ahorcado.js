// Variables Globales
var secretWord = "";


// diccionario de palabras
var diccionario = [
    "maduro", "electron", "deligar", "azul",
    "pobre", "trapo", "hojalata", "caramelo",
    "chocolate", "empalme", "aciete", "arroz",
    "licuadora", "equipo", "laguna", "temperatura",
    "infierno", "cielo", "dinero", "busqueda",
    "objetivo", "sueño", "lagartija", "patron",
    "tecnologia", "secreto", "abundancia", "brillante",
    "alma", "posicion", "aventura", "multa", "muleta",
    "estopa", "jauria", "incremento", "tesoro",
    "juventud", "especial", "oracion", "perseverar",
    "llegar", "irse", "jugar", "estadia"];

// Funcion para sortear palabra
function sortearPalabra() {
    let bandera1 = Math.floor(Math.random() * 10);
    let bandera2 = Math.floor(Math.random() * 10);
    let bandera3 = Math.floor(Math.random() * 100);
    let palabraSecreta;
    /* console.log(bandera3);
     console.log(bandera2);
     console.log(bandera1);*/
    let posicion = bandera1 + bandera2 + bandera3;
    if (posicion > diccionario.length) {
        posicion -= diccionario.length
        // console.log(diccionario[posicion])
        return diccionario[posicion];

    } else {
        return diccionario[posicion];

    }


};
// funcion para agregar palabra 

function agregarPalabra() {
    var newWord = document.getElementById("newWord").value;

    if (diccionario.includes(newWord) == true) {
        alert("La palabra ya existe");
    } else {
        diccionario.push(newWord);

    }
}

var btnAgregarPalabra = document.querySelector("#btn-addWord");
btnAgregarPalabra = document.addEventListener("click", function (event) {
    event.preventDefault();
    agregarPalabra;
});
// botom jugar
var btnNewgame = document.querySelector("#newGame");
btnNewgame = document.addEventListener("click", function(event){
    event.preventDefault();
    secretWord= sortearPalabra();
    console.log(secretWord);
    //jugar(secretWord);
   // dibujarLineas(secretWord);
})
//Funcion para capturar letra del Usuario 


function capturarLetra (event){

    let letraUsuario = event.key.toUpperCase();
    // console.log(letraUsuario);
     return letraUsuario;
     }


function jugar(word){
    
    let wordGame = word.toUpperCase();
    wordGame.split("");
    c
    for(let x = 0 ; x < wordGame.length ; x++){
     // console.log(wordGame[x])
    }     
       };


