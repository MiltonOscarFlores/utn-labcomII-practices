/*
2. Realizar un programa que una vez que solicita dos números por
teclado, los pasa a una función donde se calcula la suma de éstos.
La función devolverá dicho resultado, pero en el caso de que salga negativo,
deberá cambiarle el signo antes de devolverlo. Imprimir el
resultado en la función principal. 

*/

function suma(n1, n2) {
    return n1 + n2
}

function main() {
    let n1 = Number(prompt("Ingrese un numero"))
    let n2 = Number(prompt("Ingrese un numero"))
    alert(Math.abs( suma(n1, n2) ))

}

main()