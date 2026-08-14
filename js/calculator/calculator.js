const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}
// Tuve que hacer un if para validar que si se trata de dividir algun numero entre 0, que la funcion mande el valor de 0 para que la prueba pase y no mande "Infinity".
function divide(a, b) {
  if (b === 0) {
    return 0;
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};