// 11. Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
const assert = require('assert');

function isAbove(num1, num2) {
  return (num1 > num2);
};

// implemente seus testes aqui

assert.deepStrictEqual(isAbove(7, 5), true);
assert.strictEqual(isAbove(7, 7), false);
assert.equal(isAbove(7, 8), false);
