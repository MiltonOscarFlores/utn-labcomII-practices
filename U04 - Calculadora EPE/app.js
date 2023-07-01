// REFERENCIAS
const select = document.querySelector("#distritos");
const divInfo = document.querySelector(".info");
const formulario = document.querySelector("#formulario");

// EVENTO SUBMIT DEL FORMULARIO
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener valores seleccionados del formulario
  const tipoUsuario = document.querySelector(
    'input[name="tipousuario"]:checked'
  );
  const zonaDomicilio = select.value;
  const cantidadKwh = parseInt(document.querySelector("#kwh").value);

  // Validar campos requeridos
  if (!tipoUsuario || !zonaDomicilio || cantidadKwh <= 0) {
    divInfo.innerText = "Debes completar todos los campos requeridos.";
    return;
  }

  // Realizar cálculos
  const costoServicio = 102;
  let costoZona = 0;
  let iva = 0;

  switch (zonaDomicilio) {
    case "centro":
      costoZona = 5.8;
      break;
    case "sur":
      costoZona = 5.4;
      break;
    case "oeste":
      costoZona = 5.35;
      break;
    case "norte":
      costoZona = 5.6;
      break;
  }

  if (tipoUsuario.value === "residencial") {
    iva = 0.21;
  } else if (tipoUsuario.value === "industrial") {
    iva = 0.27;
  }

  const total = costoServicio + cantidadKwh * costoZona * (1 + iva);

  // Mostrar resultado
  divInfo.innerText = "El costo total es: $" + total.toFixed(2);
});