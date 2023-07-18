const numeros = [5, 3, 9, 1, 7];

function ordenarNumerosAscendente(numeros) {
 return numeros.sort((a, b) => a - b);
}

const numerosOrdenados = ordenarNumerosAscendente(numeros);
console.log(numerosOrdenados);