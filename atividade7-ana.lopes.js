var PaísA = 100003;
var PaísB = 300004;
var anos = ""; // ano zerado a 1 cada ano vai subir %
while (PaísA < PaísB) {
  //por enquanto o país A é menor que o país B mas eu quero que ele se iguale ou fique maior
  PaísA += PaísA * 0.03; //somar A+A para a população atual somar e adicionar a porcentagem
  PaísB += PaísB * 0.015;
  anos++; 
}
console.log(
  `O número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B é de ${anos} anos`
); //os anos que precissarão para o país B ser igual ou maior ${ano}//alt +z quebra a mesma linha

//criando um jogo da velha, que mostre as informações dentro da imagem abaixo. Inserir as informações de dorma randomica.Informar ao final quem ganhou X ou O

console.log(`___|___|___`);
console.log(`___|___|___`);
console.log(`   |   |   `);

const matriz = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
console.table(matriz);

var jogador1 = "x";
var jogador2 = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (matriz[linha][coluna] !== " ");
  matriz[linha][coluna] = jogador;
}

  

jogar(jogador1);
jogar(jogador2);
console.table(matriz);
