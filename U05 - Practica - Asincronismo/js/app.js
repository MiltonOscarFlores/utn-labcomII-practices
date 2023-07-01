// //Paso 3. 
// //Colocar en la cabecera imagen de fondo que cambie cada 30 segundos

// const fondo1 = new Image()
// fondo1.src = "src/1.jpg"
// const header = document.getElementById("header");


// function cambiarImagen() {
//     header.style.backgroundImage = fondo1
//   }

// setInterval(cambiarHeader, 1000);


//Paso 4. 
//Solicitar al usuario ingrese su nombre y seleccione color preferido (uno o varios)
// y personalizar  los colores del sitio


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const edad = document.querySelector("#edad");
const color = document.querySelector("#color-preferido");
const comentario = document.querySelector("#comentario");
const infoUsuario = document.querySelector(".info");
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreValor = nombre.value;
    const emailValor = email.value;
    const edadValor = edad.value;
    const colorValor = color.value;
    const comentarioValor = comentario.value;

    const datosUsuario = document.createElement('div');
    datosUsuario.innerHTML = `
    <p><strong>Nombre:</strong> ${nombreValor}</p>
    <p><strong>Email:</strong> ${emailValor}</p>
    <p><strong>Edad:</strong> ${edadValor}</p>
    <p><strong>Color preferido:</strong> ${colorValor}</p>
    <p><strong>Comentario:</strong> ${comentarioValor}</p>
  `;

    console.log(nombreValor);
    infoUsuario.appendChild(datosUsuario);

    formulario.reset();
});