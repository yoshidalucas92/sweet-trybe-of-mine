// Exercício 3
// Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****
let n = 5;
let simbolo = '*';
let linha = '';
let inputPosition = n;

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= n; j++) {
    if (j < inputPosition) { //  se j < posição do input, acrescenta espaço
      linha += ' ';
    } else { //  se não, acrescenta o simbolo
      linha += simbolo;
    }
  }
  console.log(linha);
  linha = ''; //  reseta a linha
  inputPosition--;//  decrementa posiçãodo input
};
