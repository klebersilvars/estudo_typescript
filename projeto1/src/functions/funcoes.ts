function login(username:string) {
    console.log(`Bem vindo, ${username}`)
}

login("Kleber Lucas");

const retornoLogin = (username2:string):string=> {return username2}
const retornoArrowFunction = retornoLogin("Kleber Lucas 2");
console.log(retornoArrowFunction)