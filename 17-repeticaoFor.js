//laço de repetição FOR
//escreve para usuário 1000x "Prestar mais atenção nas aulas"

//mostrando numeros pares
for (let i = 0; i <= 1000; i += 2) {
  // i += 2 (o valor vai mudar pra somar 2)
  console.log(i);
}

//mostrando numeros impares

for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//numeros impares com if
//% resto da divisão
//! negaçaõ

// 1000creva todos os numeros de 1 a 20

console.log("--------------------------------------------");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("--------------------------------------------");
//escreva todos os numeros pares entre 1 e 20 usando o for

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("--------------------------------------------");
//usando o if

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}

//dado um vetor com números 5,6,8,14,0,9,7,2
//calcule e exiba a somatória de seus elemnetos

//var = cria variavel global
//const = cria constante, não mudar
//let=cria funcional dentro de um grupo de codigos
//tudo que esta dentro de {} é um grupo de codigo

const numero = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0; //se eu colocar 0 so aceita numero, se eu não colocar nada aceita tudo
for (let i = 0; i < numero.length; i++) {
  somar += numero[i];
}
console.log(`A soma dos elementos do array é : ${somar}`);

//dado um vetor com números 5,6,8,14,0,9,7,2
//multiplique todos os elementos por 3 utilizando o loop for
//em seguida, mostre o novo vetor

let num = [5, 6, 8, 14, 0, 9, 7, 2];

for (let i = 0; i < num.length; i++) {
  num[i] *= 3;
}
console.table(num);

//dada a matriz 2x3, escrever para o usuario todos os seus elementos
//com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]

const numerinhos = [
    [8, 4, 1],
    [3, 7, 8],
]
console.table(numerinhos);

for (let linha = 0; linha < matriz.length; linha++) {
    console.log(linha)
    for (let coluna = 0; coluna <matriz[0].length; coluna++){
        console.log(`matriz[${linha},${coluna}]= ${numerinhos[linha][coluna]}`)
    }
}
