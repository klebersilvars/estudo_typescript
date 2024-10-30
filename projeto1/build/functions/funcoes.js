"use strict";
function login(username) {
    console.log(`Bem vindo, ${username}`);
}
login("Kleber Lucas");
const retornoLogin = (username2) => { return username2; };
const retornoArrowFunction = retornoLogin("Kleber Lucas 2");
console.log(retornoArrowFunction);
