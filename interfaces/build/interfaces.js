"use strict";
const dadosUsuario = {
    nome: "Kleber Lucas",
    idade: 29,
    data_nascimento: "17/12/2003"
};
console.log(dadosUsuario);
function novoUsuario({ nome, idade, data_nascimento }) {
    console.log(nome);
    console.log(idade);
    console.log(data_nascimento);
}
novoUsuario({ nome: "KLEBER lUCAS", idade: 29, data_nascimento: "19/12/2003" });
