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

function ligaParaCostumer(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}
ligaParaCostumer(...costumer.telefone);

const encomenda = {
    destinatario: costumer.nome,
    ...costumer.enderecos[0],
};

console.log(encomenda);