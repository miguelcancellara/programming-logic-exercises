# ⚽ Sorteio de Jogadores

Script que distribui jogadores de futebol entre **5 participantes**, respeitando uma quantidade fixa de jogadores por posição (goleiro, zagueiro, lateral, meio-campo e atacante), **sem que nenhum jogador se repita** entre os participantes.

## 🧠 Lógica aplicada

Esse exercício junta três estruturas de dados diferentes que precisam "conversar" entre si:

- `participantes`: objeto aninhado — cada participante tem um objeto com um array vazio para cada posição.
- `posicoes`: banco de jogadores disponíveis, separados por posição.
- `jogadores`: quantas vagas cada posição tem por participante (ex: `"MC": 6` → cada participante recebe 6 meio-campistas).
- `excluido`: array de controle com todos os jogadores que já foram sorteados, para impedir repetição.

O fluxo é:

1. Um laço `for...in` percorre cada **posição**.
2. Dentro dele, outro `for...in` percorre cada **participante**.
3. Um laço `while` sorteia jogadores daquela posição **até preencher a cota** definida em `jogadores[posicao]`.
4. Antes de adicionar o jogador sorteado, o código checa em `excluido` se ele já foi usado por outra pessoa.
5. Se não foi usado, o jogador é adicionado ao participante **e também** ao array de excluídos, "reservando" ele para sempre.

O ponto mais interessante aqui é o **encaixe de três laços** (posição → participante → sorteio individual) trabalhando junto com uma lista de controle (`excluido`) que impede duplicidade — uma versão "com múltiplas categorias" do mesmo problema de amostragem sem reposição do exercício da Mega-Sena.

## ▶️ Como rodar

```bash
node sorteio-jogadores.js
```
