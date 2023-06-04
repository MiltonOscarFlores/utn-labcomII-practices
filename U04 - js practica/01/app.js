// Se cargan por teclado tres números distintos.
// Mostrar por pantalla el mayor de ellos.

// SOLUCION 1
let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let number3 = Number(prompt("Enter the third number:"));

let maxNumber = function () {
  if (number1 > number2 && number1 > number3) {
    return document.write(number1);
  }
  if (number2 > number1 && number2 > number3) {
    return document.write(number2);
  }
  if (number3 > number2 && number3 > number1) {
    return document.write(number3);
  }
};

maxNumber()
