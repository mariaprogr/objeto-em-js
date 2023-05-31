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

const chavesDoObjeto = Object.keys(costumer);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
  console.error("Erro. É necessário ter um endereço cadastrado.");
}