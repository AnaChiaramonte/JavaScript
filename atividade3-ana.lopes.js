//1-criar array
var frutas = "Banana, Maçã, Pera, Uva, Morango";
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);
//adicionando itens no começo e no final
frutas.push("Goiaba");
console.table(frutas);
frutas.unshift("Tangerina");
console.table(frutas);
//mostar o indice
//var elementoprocurado = "Morango";
//var posicao = frutas.indexOf(elementoprocurado);
//console.log("A " + elementoprocurado + " esta no indíce " + posicao);
//pode fazer dessa maneira mais facil assim:
console.log(frutas[5]);
//excluir
frutas.splice(4, 1);
console.table(frutas);

//se eu naõ sei qual o indice:
//var posicao = fruta.lindex0f("Uva")
//console.log(posicao, 1)
//cosole.table(frutas)

var copiarray = frutas.slice(2, 5);
console.table(copiarray);

//segunda parte do exercício

var numerinhos = [1, 2, 3, 4, 5];
console.table(numerinhos);

console.log(" o terceiro elemento do vetor é: " + numerinhos[2]);

var copia = numerinhos.slice();
console.table(copia);

copia[0] = numerinhos[0] * 2
copia[1] = numerinhos[1] * 2
copia[2] = numerinhos[2] * 2
copia[3] = numerinhos[3] * 2
copia[4] = numerinhos[4] * 2

console.table(copia)