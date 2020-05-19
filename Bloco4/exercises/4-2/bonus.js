//  1- Ordene o array numbers em ordem crescente e imprima seus valores;
//  2- Ordene o array numbers em ordem decrescente e imprima seus valores;

//  3- Agora você irá criar um novo array a partir do array numbers, sem perdê - lo.
//  Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo.
//  Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5(valor correspondente) e 9(próximo valor).
//  Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//  exercicio bonus 1
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] < numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
//  exercicio bonus 2
console.log(numbers);
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] > numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
console.log(numbers);
//  exercicio bonus 3
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
    newNumbers.push(numbers[i]*numbers[i+1]);
}
newNumbers.push(numbers[numbers.length - 1]*2);
console.log(numbers, newNumbers);
