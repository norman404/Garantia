function crearFechaDesdeString(fechaString) {
  const partes = fechaString.split('-')
  const dia = parseInt(partes[0], 10)
  const mes = parseInt(partes[1], 10)-1
  const año = parseInt(partes[2], 10)
  return new Date(año, mes, dia)
}

function calcularMulta(fechaEntrega, fechaEsperada) {
  const entrega = crearFechaDesdeString(fechaEntrega)
  const esperada = crearFechaDesdeString(fechaEsperada)

  // console.log(entrega, esperada)

  if (isNaN(entrega.getTime()) || isNaN(esperada.getTime())) {
    return 'La fecha de entrega o de espera es incorrecta'
  }

  const diferenciaTiempo = entrega.getTime() - esperada.getTime();

  if (diferenciaTiempo <= 0) {
    return 'La multa es de 0 pesos'
  }
  const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 3600 * 24))
  const diferenciaMeses = entrega.getMonth() - esperada.getMonth() + (12 * (entrega.getFullYear() - esperada.getFullYear()))
  const diferenciaAños = entrega.getFullYear() - esperada.getFullYear()

  if (diferenciaAños > 0) {
    return 'La multa es de 10000 pesos'
  } else if (diferenciaMeses > 0 && diferenciaAños === 0) {
    return `La multa es de ${diferenciaMeses * 500} pesos`
  } else if (diferenciaDias > 0 && diferenciaMeses === 0 && diferenciaAños === 0) {
    return `La multa es de ${diferenciaDias * 15} pesos`
  }
}

console.log(calcularMulta('9-6-2015', '6-6-2015'));
console.log(calcularMulta('1-1-2018', '31-12-2017'));
console.log(calcularMulta('9-6-2015', '8-6-2015'));

