document
  .getElementById("formulario1")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    // Obtengo los valores de los campos del formulario
    let pesosInput = document.getElementById("pesos");
    let monedaSelect = document.getElementById("moneda");
    let errorDiv = document.getElementById("error");
    let respuestaDiv = document.getElementById("respuesta");
    let nombreMoneda = document.querySelector("#nombreMoneda").value
    let costoConversion = document.querySelector("#costoConversion").value

    // Verificar que el campo de pesos esté completado correctamente
    if (pesosInput.value === "" || Number(pesosInput.value) <= 0) {
      errorDiv.textContent = "Por favor, ingresa una cantidad válida de pesos.";
      errorDiv.classList.add("error");
      respuestaDiv.textContent = ""; // Limpiar la respuesta anterior si existía
      respuestaDiv.classList.remove("respuesta"); // Limpiar la clase si existia
      return; // Detener el flujo de ejecución si hay un error
    }

    // Limpiar el mensaje de error si todo está correcto
    errorDiv.textContent = ""; // Limpiar el mensaje de error si esta todo ok
    errorDiv.classList.remove("error"); // Limpiar la clase de error si esta todo ok

    // Calcular el cambio
    let pesos = Number(pesosInput.value);
    let moneda = monedaSelect.value;
    let resultado;

    // Comprobacion degun el valor del select moneda
    if (moneda === nombreMoneda) {
      resultado = pesos / costoConversion; // Cálculo específico para la nueva moneda
    } else if (moneda === "dolares") {
      resultado = pesos / 0.0042; // Cálculo para los dólares
    } else if (moneda === "euros") {
      resultado = pesos / 0.0039; // Cálculo para los euros
    }


    respuestaDiv.textContent = `Resultado: ${resultado.toFixed(2)} ${  // Formatea el resultado con dos decimales
      moneda.charAt(0).toUpperCase() + moneda.slice(1) // Capitaliza la primera letra de moneda
    }`;
    respuestaDiv.classList.add("respuesta");
  });


// PARTE 2

// declaro el evento y la funcion de una
document.querySelector("#formulario2").addEventListener("submit", function (e) {
  e.preventDefault()

  //REFERENCIAS del los campos
  let nombreMoneda = document.querySelector("#nombreMoneda").value
  let costoConversion = Number(document.querySelector("#costoConversion").value)
  let errorDiv = document.getElementById("error");


  // VALIDO si los campos estan vacios o llenos
  if (nombreMoneda == "" || costoConversion == "") {
    errorDiv.textContent = "Por favor, completa todos los campos para agregar una moneda.";
    errorDiv.classList.add("error");
    return;
  } else {
    // Limpiar el mensaje de error si todo está correcto
    errorDiv.textContent = ""; // Limpiar el mensaje de error si esta todo ok
    errorDiv.classList.remove("error"); // Limpiar la clase de error si esta todo ok

    // agregar la moneda nueva al SELECT anterior
    let monedaSelect = document.getElementById("moneda");
    let nuevaMonedaOption = new Option(nombreMoneda, nombreMoneda);
    monedaSelect.appendChild(nuevaMonedaOption)
  }


})