const somaCompras = (livroSelecionado, carrinho) => {
  return livroSelecionado + carrinho;
};

const estoque = (livroEstoque, livroSelecionado) => {
  return livroEstoque - livroSelecionado;
};

const teste = (titulo, esperado, retorno) => {
  if (esperado === retorno) {
    console.log(`${titulo} O teste deu certo`);
  } else {
    console.log(`${titulo} O teste não deu certo`);
  }
};

teste("somaCompras", 15, somaCompras(5, 5));
teste("estoque", 30, estoque(50, 20));
