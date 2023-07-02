/*
3. Realizar un programa que, pidiendo la introducción de un
número,averigüe mediante una función, si dicho número que se
le pase es positivo, negativo o nulo. Para ello, deberá escribir en
pantalla, en caso positivo, el mensaje “El número es positivo”. En
el caso de ser negativo escribirá “El número es negativo”. Si
resulta ser nulo escribirá “El número es nulo”. 

*/

function main() {

    let numero = Number(prompt("Ingresa un numero"))
    
    if (numero > 0) alert("El número es positivo")
    if (numero == 0) alert("El número es nulo")
    if (numero < 0) alert("El número es negativo")

}

main()