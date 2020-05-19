// Exercício 4
// Por fim, faça uma pirâmide com n asteriscos de base:
// n = 5
// 
//   *
//  ***
// *****
let n = 10;
let linha = '';
let simbolo = '*';
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 0; i <= meio; i++) {
  for (let j = 1; j <= n; j++) {
    if ((j < direita) && (j > esquerda)) {
      linha = linha + simbolo;
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita++; //  afasta em 1 do meio somando 1 ao valor
  esquerda--;  //  afasta em 1 do meio subtraindo 1 do valor
};
