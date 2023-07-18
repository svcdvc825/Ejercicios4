const numeros = [5, 3, 9, 1, 7];

function ordenarNumerosAscendente(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[j] < numeros[i]) {
        const menor = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = menor;
      }
    }
  }
  return numeros;
}

const numerosOrdenados = ordenarNumerosAscendente(numeros);
console.log(numerosOrdenados);