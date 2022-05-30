describe("Filtrar função", () => {
  test("ele deve filtrar pelo termo de pesquisa (titulo)", () => {
    const input =[
      { id: 1, titulo: "Clean Code" },
      { id: 2, titulo: "The Hobbit" },
      { id: 3, titulo: "Game of Thrones" }
    ];

    const output = [{ id: 3, titulo: "Game of Thrones" }];
    
    expect(filtroTitulo(input, "Game of Thrones")).toEqual(output);

    expect(filtroTitulo(input, "Game of Thrones")).toEqual(output); 

  });
});

function filtroTitulo(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");

  return inputArr.filter(function(arrayElement) {
    return arrayElement.titulo.match(regex);
  });
}
