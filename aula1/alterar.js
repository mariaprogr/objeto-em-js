const company = {
    segmento: "Pizzaria",
    produto: "Pizza",
}

console.log(company.segmento);
company.telefone = "31 98564-2541";

console.log(company.telefone);

const novaPessoa = {
    name: "Hamburguer",
}
company = novaPessoa;