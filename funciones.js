function myFunction() {
    let mensajeSecreto= document.getElementById("mensaje1").value;
    let invertirMensaje = mensajeOculto(mensajeSecreto);
   alert(invertirMensaje);
}
function mensajeOculto(mensajeSecreto){
    return mensajeSecreto.split("").reverse().join("");
}