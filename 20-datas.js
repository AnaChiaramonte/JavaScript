//criando um objeto do tipo data

var data1 = new Date();
console.log(data1);

//criando um objeto do tipo "data" com data especifica Date()

var data2 = new Date("2005=05-12 "); //se colocar o = conta como meia noite
console.log(data2);

//extraindo partes de uma data

var data3 = new Date("2008=03-16");

console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezenbro",
];

console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segundo",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

console.log(`Dia da semana ${diaDaSemana[data3.getDay()]}`);

//vendo quantos anos tem

console.log(`a gabi tem  ${data1.getFullYear - data3.getFullYear()} anos`);

const dataNasc = new Date("2008=03-16");
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - dataNasc.getTime();//tras o valor em milisegundos
console.log(`diferença: ${diferenca}`);

const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25)); //arredonda pra baixo
console.log(`idade ${idade}`);

// ou pode fazer assim

const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
if(dataAtual.getMonth()<dataNasc.getMonth() ||
(dataAtual.getMonth() === dataNasc.getMonth() &&
dataAtual.getDate()< dataNasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`idade: ${diferencaAnos -1}`)
}