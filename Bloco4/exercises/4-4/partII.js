function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    for (let index in arrayLetras) {
        if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }
    }
    return true;
}
console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

function indiceDoMaior(array) {
    let indiceMaior = 0;
    for (let i in array) {
        (array[indiceMaior] < array[i]) ? indiceMaior = i : indiceMaior = indiceMaior;
    }
    return indiceMaior;
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

function indiceDoMenor(array) {
    let indiceMenor = 0;
    for (let i in array) {
        (array[indiceMenor] > array[i]) ? indiceMenor = i : indiceMenor = indiceMenor;
    }
    return indiceMenor;
}
console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

function maiorNome(array) {
    let maior = array[0];
    for (let indice in array) {
        (maior.length < array[indice].length) ? maior = array[indice] : maior = maior;
    }
    return maior;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

function maisRepete(array) {
    let contNum = 0;
    let conrRep = 0;
    let indexRep = 0;
    for (let i in array) {
        for (let j in array) {
            if (array[i] === array[j]) { //  se for igual: contador atual +1
                contNum++;
            }
        }
        if (contNum > conrRep) { //  se contador atual for maior que o contador repetido
            conrRep = contNum; // contador repetido passa a ter o valor do atual
            indexRep = i; // salva o valor do index (vai ser chamado na hora do retorno)
        }
        contNum = 0;  // reseta contador para o proximo numero
    }
    return array[indexRep];// retorna o valor do número no index do número mais repetidp
}
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3])); //2

function somatudo(n) {
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        soma += i;
    }
    return soma;
}
console.log(somatudo(5));

function verificaFimPalavra(palavra, fimPalavra) {
    palavra.split("");
    fimPalavra.split("");
    for (let i = 0; i < fimPalavra.length; i++) {
        if (palavra[palavra.length - fimPalavra.length + i] != fimPalavra[i]) return false
    }
    return true;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false