# 🎲 Gerador de Números da Mega-Sena

Script que simula um sorteio da Mega-Sena, gerando **6 números aleatórios e únicos** entre 1 e 60.

## 🧠 Lógica aplicada

O desafio central aqui não é gerar números aleatórios (isso o `Math.random()` já resolve), mas sim **garantir que não haja repetição** — que é exatamente o que acontece num sorteio real.

A estratégia usada foi:

1. Criar um array vazio (`resultado`) que vai guardar os números sorteados.
2. Usar um laço `while` que roda **enquanto o array tiver menos de 6 números**.
3. A cada rodada, sortear um número entre 0 e 60 com `Math.random()`.
4. Antes de adicionar, checar com `.includes()` se aquele número já está no array.
5. Só adiciona (`push`) se o número **ainda não apareceu** — senão, o laço simplesmente sorteia de novo na próxima volta.

Esse padrão (sortear → checar duplicado → só adicionar se for novo) é uma forma simples e comum de resolver "amostragem sem reposição" sem precisar de estruturas mais complexas como `Set`.

## ▶️ Como rodar

```bash
node mega-sena.js
```
