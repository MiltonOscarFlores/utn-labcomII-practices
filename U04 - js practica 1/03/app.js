/*  De un postulante a un empleo, que realizó un test de capacitación,se obtuvo la siguiente información:
    nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad
    de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante
    e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

    Nivel superior: Porcentaje>=90%.
    Nivel medio: Porcentaje>=75% y <90%.
    Nivel regular: Porcentaje>=50% y <75%.
    Fuera de nivel: Porcentaje<50%.
*/
let name = prompt("Enter your name");
let totalQuestions = Number(prompt("Enter the total number of questions."));
let correctAnswers = Number(prompt("Enter the number of correct answers"));
let level;
let percentage = (correctAnswers / totalQuestions) * 100;

let calculateLevel = function () {
  if (percentage >= 90) {
    level = "Higer Level";
    return level;
  }
  if (percentage >= 75 && percentage < 90) {
    level = "Medium Level";
    return level;
  }
  if (percentage >= 50 && percentage < 75) {
    level = "Regular Level";
    return level;
  }
  if (percentage < 50) {
    level = "Out of Level";
    return level;
  }
};

console.log("% " + percentage);
console.log(`The level of the applicant ${name} is ${calculateLevel()}`);
