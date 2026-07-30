const resultado = []

while (resultado.length < 6) {
  const numeroSorteado = Math.floor(Math.random() * 60) + 1

  if (!resultado.includes(numeroSorteado)) {
    resultado.push(numeroSorteado)
  }
}

console.log('Números: ' + resultado)
