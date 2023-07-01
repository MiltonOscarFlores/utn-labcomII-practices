// Función para calcular el precio
function calculatePrice() {
  // Obtener los valores de los inputs
  let cantidad = document.getElementById("cantidad").value;
  let color = document.getElementById("select-color").value;
  let capacidad = document.getElementById("select-capacidad").value;
  let result = document.getElementById("result");

  // Validar que se haya seleccionado una opción para color y capacidad
  if (color === "" || capacidad === "") {
    result.textContent = "Por favor, seleccione el color y la capacidad.";
    result.classList.add("error");
    result.classList.remove("cotizado");
    result.style.display = "block";
    return;
  }

  // Validar que la cantidad sea un número mayor a cero
  if (isNaN(cantidad) || cantidad <= 0) {
    result.textContent = "Ingrese una cantidad válida.";
    result.classList.add("error");
    result.classList.remove("cotizado");
    result.style.display = "block";
    return;
  }

  // Realizar el cálculo según los datos ingresados
  let precioUnitario = 0;

  // Establecer el precio unitario según el color seleccionado
  switch (color) {
    case "azul":
      precioUnitario = 10;
      break;
    case "rojo":
      precioUnitario = 12;
      break;
    case "naranja":
      precioUnitario = 15;
      break;
    case "verde":
      precioUnitario = 8;
      break;
  }

  
  let precioTotal = cantidad * precioUnitario;

  if (cantidad > 3) {
    const descuento = precioTotal * 0.2;
    precioTotal -= descuento;
  }
  
  if (cantidad > 6) {
    const descuentoAdicional = precioTotal * 0.3;
    precioTotal -= descuentoAdicional;
  }

  result.textContent = `La cotización para ${cantidad} unidades de Headset ${color} con cable de ${capacidad}m es de $${precioTotal}.`;
  result.classList.remove("error");
  result.classList.add("cotizado");
  result.style.display = "block";
}


document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  calculatePrice();
});
