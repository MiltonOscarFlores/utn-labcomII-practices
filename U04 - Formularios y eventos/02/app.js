/*
Actividad
Confeccionar un formulario en HTML en donde puedan hacer la carga de un
ejemplar de algún libro y luego realizar las validaciones con javascript.
Para ello tener en cuenta qué tipo de campo van a utilizar en cada caso y
además al hacer click en el botón enviar van a tener que verificar que ninguno
de los campos haya quedado en blanco.
Por cada libro se carga:
 Código (un campo de tipo numérico)
 Nombre del libro (campo de tipo texto)
 Tipo: novela, teatro, poesía y ensayo ( tipo select)
 Editorial (campo de tipo texto)
 Año (un campo de tipo date)
 Apellido y nombre del autor (campo de tipo texto)
Insertar un botón “limpiar” y un botón “enviar”
*/

// REFERENCIAS

const enviar = document.querySelector("#enviar");
const limpiar = document.querySelector("#limpiar");
const info = document.querySelector(".informacion");


// FUNCIONES

function validarFormulario(e) {
    e.preventDefault();
    const codigo = document.querySelector("#codigo").value;
    const nombreLibro = document.querySelector("#nombreLibro").value;
    const tipo = document.querySelector("#tipo").value;
    const editorial = document.querySelector("#editorial").value;
    const año = document.querySelector("#año").value;
    const autor = document.querySelector("#autor").value;
    if (codigo === "" || nombreLibro === "" || tipo === "" || editorial === "" || año === "" || autor === "") {
        console.log("Todos los campos son obligatorios");
    } else {
        console.log("TODO JOYA");
        cargarInfo(codigo, nombreLibro, tipo, editorial, año, autor);
    }
}

function limpiarFormulario() {
    codigo.value = "";
    nombreLibro.value = "";
    tipo.value = "";
    editorial.value = "";
    año.value = "";
    autor.value = "";
}

function cargarInfo() {
    let parrafo = document.createElement("p");
    info.classList.add("borde")
    parrafo.innerHTML = `
        <b>Nombre:</b> ${nombreLibro.value}<br>
        <b>Codigo:</b> ${codigo.value} <br>
        <b>Tipo:</b> ${tipo.value}<br>
        <b>Editorial:</b> ${editorial.value}<br>
        <b>Año:</b> <small>${año.value}</small><br>
        <b>Autor:</b> ${autor.value}<br><hr>
    `;
    info.appendChild(parrafo);
}

// EVENTOS

enviar.addEventListener("click", validarFormulario);
limpiar.addEventListener("click", limpiarFormulario);