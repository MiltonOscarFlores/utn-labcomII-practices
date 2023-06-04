/*
    Cargar por teclado los siguientes datos de un alumno:
    Nombre
    Apellido
    Domicilio
    Curso
    Carrera
    Materia 
    Nota primer parcial
    Mostrar todos los datos por pantalla uno debajo del otro.
*/
let alumno = {};
alumno.Nombre = prompt("Ingrese su nombre");
alumno.Apellido = prompt("Ingrese su apellido");
alumno.Domicilio = prompt("Ingrese su domicilio");
alumno.Curso = prompt("Ingrese su curso");
alumno.Carrera = prompt("Ingrese su carrera");
alumno.Materia = prompt("Ingrese su materia");
alumno.notaPrimerParcial = prompt("Ingrese la nota del primer parcial");

let {
  Nombre,
  Apellido,
  Domicilio,
  Curso,
  Carrera,
  Materia,
  notaPrimerParcial,
} = alumno;

for (const key in alumno) {
  console.log(`${key} : ${alumno[key]}`);
}
console.log(alumno);
