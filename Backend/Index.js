function encriptar(){
    let texto = document.getElementById("digitador").value;
    let contenidoTextoD = document.getElementById("contenidoTextoD");
    let textoEncriptado = texto
    .replace(/a/gi,"ai")
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");
    if (document.getElementById("digitador") != 0){
        texto = textoEncriptado;
        contenidoTextoD.textContent = textoEncriptado;
    }
    else{
        alert("Debes digitar un texto")
    }
}

function desEncriptar(){
    
}
function copiar(){
    alert ("se ha copiado correctamente")
}
