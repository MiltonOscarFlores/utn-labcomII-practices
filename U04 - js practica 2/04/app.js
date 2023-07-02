/*
4. Crear un programa que permita cargar un entero en un text y al
presionar un botón nos muestre dicho valor elevado al cubo
(emplear la función alert). 

*/

const input = document.querySelector("#number")
const boton = document.querySelector("#button")

function alCubo(params) {
    let resultado = Math.pow(input.value, 3)
    alert(resultado)
    input.value = ""
}

function teclaEnter(e) {
    if (e.key === "Enter") {
        alCubo()
    }
}

boton.addEventListener("click", alCubo)
input.addEventListener("keypress", teclaEnter)