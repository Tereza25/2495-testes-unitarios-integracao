const totalLivros = require('./compras')

test('adicionar 1 + 2 é igual a 3', () => {
    expect(totalLivros(1, 2)).toBe(3);
});