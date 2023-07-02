/*
6. Cargar un nombre y un apellido en sendos text. Al presionar un
botón, concatenarlos y mostrarlos en un tercer text (Tener en
cuenta que podemos modificar la propiedad value de un objeto
TEXT cuando ocurre un evento)

*/

const boton = document.querySelector("#boton")


function concatenar() {

    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const concatenado = document.querySelector("#concatenado")

    concatenado.value = nombre + " " + apellido

}


boton.addEventListener("click", concatenar)