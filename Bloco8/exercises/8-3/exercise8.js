// 8. Teste se uma função foi definida
const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui
assert.notStrictEqual(typeof thereIs, 'undefined');
assert.deepStrictEqual(typeof thereIs, 'function');
