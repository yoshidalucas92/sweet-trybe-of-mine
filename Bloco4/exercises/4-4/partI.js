//1 Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

// Valor esperado no console: Bem-vinda, Margarida
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim',
};
console.log('[EXERCICIO - 1]');
console.log('Bem-vinda,', info.personagem);
console.log('---------------------------------');
//2 - Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim” e, em seguida, imprima o objeto no console.
//     Valor esperado no console:
// {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };
console.log('[EXERCICIO - 2]');
console.log(info);
console.log('---------------------------------');
// 3 - Faça um for/in que mostre todas as chaves do objeto.

//     Valor esperado no console:

//   personagem
//   origem
//   nota
//   recorrente
console.log('[EXERCICIO - 3]');
for (const i in info) {
    console.log(i);
}
console.log('---------------------------------');
//4- Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

//     Valor esperado no console:

//   Margarida
//   Pato Donald
//   Namorada do personagem principal nos quadrinhos do Pato Donald
//   Sim
console.log('[EXERCICIO - 4]');
for (const i in info) {
    console.log(info[i]);
}
console.log('---------------------------------');
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, 
// “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.
//         Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!
console.log('[EXERCICIO - 5]');
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
};
for (const i in info) {
    if (info[i]!==info2[i]){
        console.log(info[i], "e ", info2[i])
    } else console.log("Ambos recorrentes")
}
console.log('---------------------------------');
