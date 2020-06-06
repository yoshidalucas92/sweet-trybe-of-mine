// 4. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

const assert = require('assert');

function myRemove(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// implemente seus testes aqui
const list = [1, 2, 3, 4];
//     Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove(list, 3), [1, 2, 4]);

//     Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove(list, 3), [1, 2, 3, 4]);

//     Verifique se o array passado por parâmetro não sofreu alterações
myRemove(list, 3);
assert.deepStrictEqual(list, [1, 2, 3, 4]);

//     Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove(list, 5), [1, 2, 3, 4]);
