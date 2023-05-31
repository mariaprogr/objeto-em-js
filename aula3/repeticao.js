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

for (let chave in costumer){
    let tipo = typeof costumer [chave];
    if (tipo !== 'object' && tipo !== "function"){
      console.log(`A chave ${chave} tem o valor ${costumer[chave]}`);

    }
}