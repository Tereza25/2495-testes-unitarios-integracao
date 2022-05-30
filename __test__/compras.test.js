const totalLivros = require('../aula-02/compras');

test('Soma 1 + 2 para ser igual a 3', () => {
  expect(totalLivros(1, 2)).toBe(3);
})
