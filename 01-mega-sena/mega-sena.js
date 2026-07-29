let resultado = [] //array que vai receber os números sorteados

while (resultado.length < 6) { //enquanto (o tamanho do arry for diferente de 6, exemplo(1 é diferente de 6 entao verdadeiro... quando chegar no 6 vai ver q nao é diferente entao vai dar falso))
        let numerosSorteio = Math.round(Math.random() * 60) //faz o sorteio de 1 a 60
        if (resultado.includes(numerosSorteio) == false) { //na primeira passagem, o array resultado nao vai ter nada mas o sorteio sim, entao nada vai ser igual a 1? não, entao é falso e entra na condição de adicionar o numero no array vazio
                resultado.push(numerosSorteio) //pega o numero do sorteio e adiciona no array 
        }
}
console.log('Números: ' + resultado) //exibi os numeros sorteados