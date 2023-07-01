/*
    Realizar un programa que simule, mediante una función
    denominada cuenta, como el ordenador cuenta por pantalla, desde
    0 hasta un número a determinar por el usuario. Dicho número se
    pide en la función principal y se envía a la función cuenta
    por valor, donde se irán imprimiendo.
*/


let cuenta = function (number) {
    for (let i = 0; i <= number; i++) {
        console.log(i);

    }
}

let main = function () {
    let number = Number(prompt("Enter the number"))
    cuenta(number)
}

main()
