let numeroIngresado=parseInt(prompt("ingrese su edad"))
let generoUsuario= prompt("indique su genero")
let edadMujer=60 ; let edadHombre= 65
if (numeroIngresado >= edadMujer && generoUsuario === "mujer" ){
 alert("Puede Jubilarse señora")
  
} else if(numeroIngresado <edadMujer && generoUsuario=== "mujer") {
  alert("no puede jubilarse señora")
 } else if(numeroIngresado>=edadHombre&& generoUsuario==="hombre"){
  alert("usted puede jubilarse señor")
  
 }else if (numeroIngresado<edadHombre&&generoUsuario==="hombre"){
  alert("no puede jubilarse señor")
 }

/* if(numeroIngresado>= edadHombre && generoUsuario === "hombre"){
  alert("puede jubilarse señor")
  
}else if(numeroIngresado<edadHombre && generoUsuario==="hombre" ){
  alert("no puede jubilarse señor")

} */
