const costumer = {
    nome: "Lanches Uau Burguer",
    telefone: ["3569-4852", "3569-5555"],
    email: "lanchesaua@gmail.com",
};
costumer.enderecos = [
    {
    rua: "Romualdo",
    número: 180,
    apto: true,
    complemento: "apto 404",
    },
];

costumer.enderecos.push({
    rua: "Colonial",
    número: 5000,
    apto: false,
});

console.log(costumer.enderecos);

const listaApenasApartamentos = costumer.enderecos.filter(
    (endereco) => endereco.apartamento === true 
);

console.log(listaApenasApartamentos);