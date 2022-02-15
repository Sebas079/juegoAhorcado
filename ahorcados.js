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
var palabraSecreta = ""; //palabra ocultas 
var palabraAdivinar = ""; // palabra adivinar 
var lifes = 6;
document.getElementById("inicio").addEventListener("click", comprobar());
iniciar();

function iniciar(){
    palabraSecreta = diccionary[Math.floor(Math.random()*diccionary.length)];
    palabraSecreta = palabraSecreta.toUpperCase();
    for (let i = 0; i < palabraSecreta.length; i++) {
        palabraAdivinar += "_ ";
    }
    document.getElementById("palabra").innerHTML = palabraAdivinar;
}

function comprobar(){
   let letra = document.getElementById("letra").value.toUpperCase();
   console.log(letra)
   palabraSecreta = palabraSecreta.toLocaleUpperCase();
   let nuevo="";
   for(let i = 0; i < palabraSecreta.length; i++){
       if(letra == palabraSecreta[i]){
           nuevo += letra + " ";
       }else{
           nuevo = nuevo + palabraAdivinar[i*2] + " ";
       }
   }
   palabraAdivinar = nuevo ;
   document.getElementById("palabra").innerHTML = palabraAdivinar;
}
