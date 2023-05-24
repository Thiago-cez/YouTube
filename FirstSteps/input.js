//Ler informações de input via teclado.
//prompt-sync
const prompt = require("prompt-sync")();

const name = prompt("Qual o seu nome? ");
const idade = prompt("ola  "+ name + " Quantos anos você tem ?");

console.log("Olá, seu nome é: "+ name +"," + " e a sua idade é: "+ idade + " Anos");