const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
// ex1 -Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles:
//  o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addKey(objeto, chave, valor) {
    objeto[chave] = valor;
}
;
//  ex2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(objeto) {
    return Object.keys(objeto);
};

// ex3 Crie uma função para mostrar o tamanho de um objeto.
function showSizeOf(objeto) {
    return Object.keys(objeto).length;
};

// ex4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(objeto) {
    return Object.values(objeto);
};

// ex5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
//  Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });// detalhe segundo parametro entre {}

// ex6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalEstudantes(objeto) {
    let total = 0;
    const array = Object.keys(objeto);
    for (i in array) {
        total += objeto[array[i]].numeroEstudantes;
    }
    return total;
};

// ex7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function valorDaChaveNaPos(objeto, posicao) {
    return Object.values(objeto)[posicao];
}

//ex8 - Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function verificaPar(objeto, chave, valor) {
    const entradas = Object.entries(objeto);
    let verif = false;
    for (i in entradas) {
        ((entradas[i][0] === chave) && (entradas[i][1] === valor)) ? verif = true : verif = verif;
    }
    return verif;
}

//Bonus 1 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const estudantesMateria = (objeto) => {
    let total = 0;
    const array = Object.keys(objeto);
    for (i in array) {
        if (objeto[array[i]].materia === 'Matemática') {
            total += objeto[array[i]].numeroEstudantes;
        }
    }
    return total;
}

// bonus 2 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
function getInfo(objeto, prof) {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(objeto);
    for (i in array) {
        if (array[i].professor === prof) {
            allLessons.push(array[i].materia)
            allStudent += array[i].numeroEstudantes;
        }
    }
    return { lessons: allLessons, estudantes: allStudent };
}

function relatorio(allLessons, prof) {
    const report = {};
    report.professor = prof;
    Object.assign(report, getInfo(allLessons, prof));
    return report;
}
console.log(relatorio(allLessons, 'Maria Clara'));



// addKey(lesson2, 'turno', 'manhã');
// listKeys(lesson2);
// showSizeOf(lesson2);
// listValues(lesson2);
// console.log(listKeys(lesson2));
// console.log("tamanho", showSizeOf(lesson2));
// console.log(listValues(lesson2));
// console.log(allLessons);
// console.log("total de estudantes", totalEstudantes(allLessons));
// console.log(valorDaChaveNaPos(lesson1, 0));
// console.log(verificaPar(lesson1, 'materia', 'Matemática'));
// console.log(estudantesMateria(allLessons));