let contador = 0;
while (contador < 5) {
  contador++;
  console.log(contador);
}

var x = 20;
while (x > 10) {
  console.log("Encontrei no laço while...");
  x--;
}
console.log("terminei!");

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("lançamento!");

//Estourando o limite do cartão - versão while

let limite = 500;
let fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100; // Math.random() cria valor aleatório entre 0 e 1
  fatura += gasto;
  console.log(`gastei R$ ${gasto.toFixed(2)} Fatura: R$ ${fatura.toFixed(2)}`); //toFixed(2)o valor mostrado para o usuario em duas casas depois da virgula
  fatura > limite && console.log(`Estourou o limite do cartão!`);
  //&&faz somente um IF, sem else
}

//estorando o limite do cartão - versão do while

console.log("-------------------------------------------");
var limite = 500;
var fatura = 0; // do while msotra antes e valida depois
do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(`gastei R$ ${gasto.toFixed(2)} Fatura: R$ ${fatura.toFixed(2)}`);
  fatura > limite && console.log(`Estourou o limite do cartão!`);
} while (fatura <= limite);

console.log("-------------------------------------------------------");

// jogo cara ou coroa
// repetição - 3
// variavel cara ou coroa -> aleatória - 50%
// placar vitorias e derrotas

var rodada = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa";
  escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa";
  if (escolhaJogador == moeda) {
    console.log(
      `Parabéns,você escolheu ${escolhaJogador} e caiu ${moeda}, você ganhou!`
    );
    vitoria++;
    console.log(moeda);
  } else {
    console.log(
      `Que pena,você escolheu ${escolhaJogador} e caiu ${moeda}, você perdeu!`
    );
    derrota++;
    console.log(moeda);
  }
  rodada++; //tem que colocar esse codigo se não vai infinito
}

console.log(`-----------------------------------------------------`);
console.log(`                     Placar                          `);
console.log(`-----------------------------------------------------`);
console.log(`${vitoria > derrota ? "💵Você ganhou!🥳🎉" : "💵Você perdeu!😢"}`);
console.log(`Vitórias: ${vitoria}`);
console.log(`Derrota: ${derrota}`);
