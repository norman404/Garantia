function convertirHoraATexto(hora, minutos) {
  if (hora < 1 || hora > 12 || minutos < 0 || minutos > 59) {
    return "Datos de hora erroneos";
  }
  if (minutos === 0) {
    return `${numeroATexto(hora)} en punto`;
  } else if (minutos === 30) {
    return `${numeroATexto(hora)} y media`;
  } else if (minutos === 15) {
    return `${numeroATexto(hora)} y un cuarto`;
  } else if (minutos === 45) {
    return `Un cuarto para las ${numeroATexto((hora % 12) + 1)}`;
  }

  if (minutos < 30) {
    return `${numeroATexto(hora)} y ${numeroATexto(minutos)} ${minutos === 1 ? 'minuto' : 'minutos'}`;
  } else {
    return `${numeroATexto(60 - minutos)} minutos para las ${numeroATexto((hora % 12) + 1)}`;
  }
}

function numeroATexto(numero) {
  const numerosATexto = {
    1: "Uno", 2: "Dos", 3: "Tres", 4: "Cuatro", 5: "Cinco",
    6: "Seis", 7: "Siete", 8: "Ocho", 9: "Nueve", 10: "Diez",
    11: "Once", 12: "Doce", 13: "Trece", 14: "Catorce", 15: "Quince",
    16: "Dieciseis", 17: "Diecisiete", 18: "Dieciocho", 19: "Diecinueve", 20: "Veinte",
    21: "Veintiuno", 22: "Veintidos", 23: "Veintitrés", 24: "Veinticuatro", 25: "Veinticinco",
    26: "Veintiseis", 27: "Veintisiete", 28: "Veintiocho", 29: "Veintinueve", 30: "Treinta"
  };
  return numerosATexto[numero] || `${numero}`;
}

// Ejemplos de uso
console.log(convertirHoraATexto(5, 0));
console.log(convertirHoraATexto(5, 15));
console.log(convertirHoraATexto(5, 30));
console.log(convertirHoraATexto(5, 40));
