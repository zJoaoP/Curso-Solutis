// function request() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Simple promisse with timeout.");
//     }, 500);
//   });
// }
// request().then((response) => console.log(response));
// ------------------------------------------------------------
fetch = require("node-fetch");

function buscarCep(cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) =>
    response.json()
  );
}

async function obterLogradouroPorCep(cep) {
  return buscarCep(cep).then((data) => {
    logradouro = data.logradouro;
  });
  return logradouro;
}

console.log(obterLogradouroPorCep("40210715"));
buscarCep("40210715").then((data) => console.log(data.logradouro));
