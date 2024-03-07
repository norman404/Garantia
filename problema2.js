async function procesarDatosPaises() {
  try {
    const respuesta = await fetch('https://restcountries.com/v3.1/all');
    const paises = await respuesta.json(); 

    const paisesPorContinente = paises.reduce((acc, pais) => {
      const region = pais.region || 'Otro';
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(pais);
      return acc;
    }, {});

    const poblacionTotal = paises.reduce((acc, pais) => acc + (pais.population || 0), 0);

    const paisesONU = {
      miembros: paises.filter(pais => pais.unMember),
      noMiembros: paises.filter(pais => !pais.unMember)
    };

    const monedas = paises.reduce((acc, pais) => {
      const monedasDePais = Object.values(pais.currencies || {}).map(moneda => moneda.name);
      monedasDePais.forEach(moneda => {
        if (moneda && !acc.includes(moneda)) {
          acc.push(moneda);
        }
      });
      return acc;
    }, []);
    

    const nombresOficiales = paises.map(pais => pais.translations.spa.official);

    console.log('Paises por Continente:', paisesPorContinente);
    console.log('Población Total:', poblacionTotal);
    console.log('Paises ONU:', paisesONU);
    console.log('Monedas:', monedas);
    console.log('Nombres Oficiales en Español:', nombresOficiales);
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
  }
}

procesarDatosPaises();
