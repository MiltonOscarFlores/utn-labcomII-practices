// Se ingresa por teclado un valor entero, mostrar una leyenda 
// que indique si el número es positivo, cero o negativo.

let number = Number(prompt("Enter a value"))

let checkNumber = function () {
    if (number < 0) {
        return document.write("The number is NEGATIVE")
    }
    if (number === 0) {
        return document.write("The number is ZERO")
    }
    if (number > 0) {
        return document.write("The number is POSITIVE")
    }
}

checkNumber()