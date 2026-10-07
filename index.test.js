const test = require('node:test');
const assert = require('node:assert');
const { soma } = require('./index');
 
test('soma 2 + 3 deve ser 5', () => {
  assert.strictEqual(soma(2, 3), 5);
});
