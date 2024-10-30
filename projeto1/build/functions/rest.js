"use strict";
function totalDeVendas(...vendas) {
    const quantidadeDeVendas = vendas.length;
    console.log(`Você fez o total de ${quantidadeDeVendas} vendas hoje!`);
}
totalDeVendas(10, 20, 30, 90, 90);
