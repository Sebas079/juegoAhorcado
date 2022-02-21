// Array diccionario
var diccionary = [
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
    //  variables globales
var palabraSecreta = ""; //palabra ocultas 
var palabraAdivinar = ""; // palabra adivinar 
var lifes = 6;
var letra;
var letrasUsuario ="";
var letrasErradas = [];
var anular= document.getElementById("inicio");

// botones
var btnInicio = document.getElementById("inicio").addEventListener("click",iniciar)
var btnComprobar = document.getElementById("comprobar").addEventListener("click",comprobar)
var btnDesist = document.getElementById("desist").addEventListener("click", reinicio);
// funcion para inicias juego;
function iniciar(){
    anular.style.display= "none";
    palabraSecreta = diccionary[Math.floor(Math.random()*diccionary.length)];
    for(let i = 0; i < palabraSecreta.length; i++){
        palabraAdivinar +="_ ";
    }
    document.getElementById("palabra").innerHTML = palabraAdivinar;
}

function comprobar(){
    letra = document.getElementById("letra").value.toUpperCase();
    letrasUsuario = letra;
    console.log(letrasUsuario);
    palabraSecreta = palabraSecreta.toUpperCase();  
    var nuevo ="";
    for(let i = 0; i < palabraSecreta.length; i++){
        if(letrasUsuario == palabraSecreta[i] ){
            console.log(palabraSecreta[i])
            nuevo= nuevo + letrasUsuario + " ";
    
        }else{
            nuevo = nuevo + palabraAdivinar[i*2] + " ";   
                  
              } 
       if(nuevo == palabraAdivinar){
           letrasErradas.push(letrasUsuario);
           lifes --;
           letrasFall();
       }
       
    }
    
    if(lifes == 0){
        loser();
    }
    dibujarAhorcado(lifes);
    
    palabraAdivinar = nuevo;
    document.getElementById("palabra").innerHTML = palabraAdivinar;
    if(palabraAdivinar.search("_") == -1){
        win();
    }
} 

function dibujarAhorcado(num){
    switch(num){
        case 5 :
            dibujarCabeza();
            break;
        case 4 :
            dibujarTorzo();
            break;
        case 3 :
            dibujarBrazoDer();
            break;
        case 2 :
            dibujarBrazoiz();
            break;
        case 1 :
            dibujarPiernaDer();
            break;
        case 0 :
            dibujarPiernaIzq();
            break;
        
    }
}
function reinicio(){
    location.reload(true);
   
    anular.style.visibility ="visible";
}