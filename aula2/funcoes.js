const costumer = {
    nome: "Lanches Uau Burguer",
    telefone: ["3569-4852", "3569-5555"],
    email: "lanchesaua@gmail.com",
    saldo: 200,
    efetuaPagamento: function (valor) { 
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

costumer.efetuaPagamento(25);
