//  ex1 - fatorial
let n = 6;
function fatorial(numero) {
    let fat = numero;
    for (let i = numero; i > 1; i--) {
        fat = fat * (i - 1);
    }
    return fat;
}
console.log(fatorial(n));

//  ex2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
let frase = "Antônio foi no banheiro e não sabemos o que aconteceu";
function retornaMaiorPalavra(frase) {
    let palavra = frase.split(' ');
    let maioPalavra = 0;
    let result = '';

    for (const word of palavra) {
        (word.length > maioPalavra) ? (maioPalavra = word.length, result = word): maioPalavra = maioPalavra;
    }
    return result;
}
console.log(retornaMaiorPalavra(frase));