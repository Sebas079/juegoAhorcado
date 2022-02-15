// Array diccionario
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
    "llegar", "irse", "jugar", "estadia", "pelea", "atajo",
    "abrazar", "sentimiento", "acuario", "saltar", "leon", "aturdio",
    "entrada", "salida", "armar", "tratamiento", "saltamontes"];
/* bariables globales */
var btnInicio = document.getElementById("btn-start");
var posicionRandom = Math.floor(Math.random() * diccionario.length);
var palabraSecreta = sortearPalabra();
var newWord = document.querySelector(".addWord");
var letrasErradas = [];
var letras = [];
var palabraAdivinar = [];
var capturarLetra = [];
var btnInicio = document.getElementById("inicio");
var btnComprobar = document.getElementById("comprobar");


function sortearPalabra() {
    return diccionario[posicionRandom].toUpperCase();
};
function dibujarGuiones(palabra) {
    for (let x = 0; x < palabra.length; x++) {
        palabraAdivinar += "_ ";
    }
    document.getElementById("palabra").innerHTML = palabraAdivinar;

}
// funcion para comprobar letra
function comprobar() {
    let palabra = palabraSecreta//.split(" ");

    let letra = letras
    console.log(letra)
   
    let nuevo = "";
    console.log(palabra);
    for (let x = 0; x < palabra.length; x++) {
        if (letra == palabra[x]) {
            nuevo+=letra + " ";
            console.log(palabraSecreta[x])
            console.log(letra)
            console.log(nuevo)
        } else {
            nuevo += palabraAdivinar[x * 2] + " ";
            console.log(nuevo)
        }

    }
    palabraAdivinar = nuevo;
    document.getElementById("palabra").innerHTML = palabraAdivinar;
}


//botones
btnComprobar.addEventListener("click", comprobar);
btnInicio.addEventListener("click", function (event) {

    event.preventDefault();
    dibujarGuiones(palabraSecreta);
});

// funcion capturar letra con el teclado


capturarLetra = document.addEventListener("keydown", function (e) {
    e.preventDefault();
    var letra = e.keyCode || e.which;
    if (letra > 64 && letra < 91) {
        letra = e.key.toUpperCase();
        if (letras.includes(letra)) {
            alert("ya elegiste esa letra");
        } else {
            letras.push(letra);
            //console.log(letras);
        }
    }
})



