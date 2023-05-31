const company = {
    name: "Lanchonete Big Burguer",
    id: "1",
    email: "big_burguer@big_burguer.com.br",
    phone: "(31)99999-9999",
    address: "Avenida Tapajós, 1000, Bairro São Caetano",
    city: "Betim",
    state: "MG",
    zip: "32600-000"
};

console.log(`O nome da empresa é ${company.name} e o telefone é ${company.phone}.`
);

const costumer = {
    name: "Ana Maria",
    phone: "(31)99999-9913",
    cpf: "460.077.536-15",
    address: "Rua Campo Belo, 1000, Bairro São Caetano",
    city: "Betim",
    state: "MG",
    zip: "32650-000"
}
console.log(`O nome do cliente é ${costumer.name} e o telefone é ${costumer.phone}.`
);

console.log(`Os 3 primeiros dígitos do CPF são ${costumer.cpf.substring(0,3)}.`);