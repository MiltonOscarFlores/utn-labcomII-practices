/*
5. Cargar dos números en objetos de tipo text y al presionar un
botón, mostrar el mayor.

*/

const boton = document.querySelector("button")
const resultado = document.querySelector("span")
const n2 = document.querySelector("#n2")

function mostrarMayor() {

    let n1 = Number(document.querySelector("#n1").value)
    let n2 = Number(document.querySelector("#n2").value)

    if (n1 > n2) {
        resultado.textContent = n1
        console.log(n1);
    } else if (n2 > n1) {
        resultado.textContent = n2
        console.log(n2);
    } else {
        resultado.textContent = "SON IGUALES"
    }
}

function teclaEnter(e) {
    if (e.key === "Enter") {
        mostrarMayor()
    }
}

boton.addEventListener("click", mostrarMayor)
n2.addEventListener("keypress", teclaEnter)