function encriptar(){
    let texto = document.getElementById("digitador").value;
    let contenidoTextoD = document.getElementById("contenidoTextoD");
    let textoEncriptado = texto
    .replace(/a/gi,"ai")
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");
    if (texto != 0){
        texto = textoEncriptado;
        contenidoTextoD.textContent = textoEncriptado;
    }
    else{
        alert("Debes digitar un texto")
    }
}

function desEncriptar(){
    let texto = document.getElementById("digitador").value;
    let textoDesencriptado = texto
    .replace(/ai/gi,"a")
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");
    if(texto != 0){
        texto = textoDesencriptado;
        contenidoTextoD.textContent = textoDesencriptado;
    }
}