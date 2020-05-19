// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// 1n = 5
// *****
// *****
// *****
// *****
// *****
let n = 5, i, simbolo = '*', linha = '';
//  loop para preencher linha com n simbolos
for (i = 0; i < n; i++) {
  linha += simbolo;
};
//  loop para imprimir a linha n vezes
for (i = 0; i < n; i++) {
  console.log(linha);
};
