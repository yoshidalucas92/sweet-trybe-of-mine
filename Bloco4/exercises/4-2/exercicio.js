let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
// exercicio 1 - percorra o array imprimindo todos os valores nele contidos com a função console.log();
// exercicio 2 - somar todos os valores contidos no array e imprimir o resultado;
// exercicio 3 - calcule e imprima a média aritmética dos valores contidos no array;
// exercicio 4 - caso valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
// exercicio 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// exercicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
// exercicio 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let maior = '';
let impares = 0;
let menor = numbers[numbers.length -1];

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
    (numbers[i] > maior) ? maior = numbers[i] : maior = maior;
    (numbers[i] % 2 !==0) ? impares +=1 : impares = impares;
    (numbers[i] < menor) ? menor = numbers[i] : menor = menor;   
}
//  exercicio 1
console.log("elementos:", numbers);
//  exercicio 2
console.log("Soma:", soma);
//  exercicio 3
let media = soma / numbers.length;
console.log("Média:", media);
//  exercicio 4
(media > 20) ? console.log('valor maior que 20') : console.log('valor menor ou igual 20'); 
//  exercicio 5
console.log("maior:", maior);
//  exercicio 6
(impares > 0) ? console.log("Valores ímpares:", impares) : console.log("Nenhum valor ímpar encontrado"); 
//  exercicio 7
console.log("Menor:", menor);
