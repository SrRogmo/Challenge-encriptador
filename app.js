//qui se llaman objetos de HMTL para otorgarles una funcion en javascript
let titulo = document.querySelector('h1');
//con el sigueinte codigo se otorga la funcion al titulo, incertando de html el texto
titulo.innerHTML = 'Hora del Desafío'
//esta es la estructura correcta con la cual se crea un boton
function consolaPrueba() {
    console.log ('El botón fue clicado')
}
function alertPrueba() {
    alert ('Yo amo JS')
}
function promptPrueba() {
    let respuesta = prompt('dime una cuidad de brazil')
    alert ('Estuve en '+ respuesta + ' y me acordé de ti')
}
//La funcion tiene una cualidad la que permite que sea posible sumar, sin embargo sigue sin resokución
function sumaPrueba() {
    numero1 = prompt(parseInt('dime el numero que quieres sumar'));
    numero2 = prompt(parseInt('dime el segundo numero que deseas sumar'));
    return console.log(numero1 + numero2);
}