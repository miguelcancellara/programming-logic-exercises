let produtos = [
  [5102, 154.22],
  [5933, 987.85],
  [5405, 530.00],
  [5102, 164.22],
  [5933, 290.30],
  [5933, 78.85],
  [5102, 786.54],
  [5102, 424.45],
  [5405, 6545.88]
]
let somaProdutos = 0
let somaCfop = []

for (let a = 0; a < produtos.length; a++) {
  if (produtos[a][0] == 5933) {
    produtos[a][0] = 5101
  }
  somaProdutos = somaProdutos + produtos[a][1]
}

for (let b = 0; b < produtos.length; b++) {
  if (somaCfop[produtos[b][0]]) {
    somaCfop[produtos[b][0]] += produtos[b][1]
  } else {
    somaCfop[produtos[b][0]] = produtos[b][1]
  }
}
console.log('A soma dos valores dos produtos é de: ' + somaProdutos)
console.table(somaCfop)