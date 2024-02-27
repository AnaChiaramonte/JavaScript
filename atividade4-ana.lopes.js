console.log("---------------------atividade 1----------------------------")
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);
console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);
console.log("");
console.log("--------------------atividade 2--------------------------");
console.log("");

var cadastro = [
  "Ana clara chiaramonte lopes",
  16,
  "Vermelho",
  "Uva verde",
  "Rua chácara nunes",
  "Cristal",
];
console.log("Ola!", cadastro[0], "Seja bem-vindo ao nosso sistema");
console.log(
  "Você mora no endereço",
  cadastro[4],
  "e tem um pet chamado",
  cadastro[5]
);
console.log("Sua idade é", cadastro[1], "e gosta muito da fruta", cadastro[3]);
console.log("Sua cor favorita é", cadastro[2], ".");
