# 🧾 Soma de Valores por CFOP

Script que processa uma lista de produtos (código CFOP + valor) e calcula:
1. O valor total de todos os produtos.
2. O valor total **agrupado por código CFOP**.

Além disso, o script reclassifica automaticamente qualquer produto com o código `5933` para `5101` antes de somar — simulando uma correção fiscal comum no dia a dia de sistemas de nota fiscal.

## 🧠 Lógica aplicada

Os dados de entrada são um array de arrays (`[[cfop, valor], [cfop, valor], ...]`), o que já pede dois cuidados: acessar por índice (`produto[0]`, `produto[1]`) e não confundir a ordem dos dados.

O código resolve o problema em duas passagens separadas:

**1ª passagem — correção + soma total:**
- Percorre todos os produtos.
- Se o CFOP for `5933`, substitui por `5101` diretamente no array original.
- Acumula o valor de cada produto em `somaProdutos`.

**2ª passagem — soma agrupada por CFOP:**
- Percorre os produtos novamente (já corrigidos).
- Usa o **próprio código CFOP como índice** do array `somaCfop` (um uso esperto de array como se fosse um dicionário/objeto).
- Se aquele CFOP ainda não teve nenhum valor somado, `somaCfop[cfop]` é `undefined` → entra no `else` e inicia o valor.
- Se já existir valor, soma (`+=`) o novo valor ao que já estava lá.

O `console.table()` no final é um baita detalhe — transforma esse array esparso em uma tabela legível, ótimo para depuração de dados agrupados.

## ▶️ Como rodar

```bash
node soma-cfop.js
```