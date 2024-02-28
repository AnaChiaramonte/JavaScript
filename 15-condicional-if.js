var anoNascimento = 2007;

if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);
//condicional simples

var anoNascimento = 2002;

if (anoNascimento <= 2000) console.log(`A pessoa nasceu depois de 2000`);
else console.log(`A pessoa nasceu antes de 2000`);

//--------------------------banco de dados---------------------------

//condicional composto
const login = "admin"; //digitado pelo usuariu
var senha = "123456"; //digitado pelo usuario

const loginUser = "admin"; //banco de dados
const senhaUser = "adimin"; //banco de dados
if (login == loginUser && senha == senhaUser)
  //&& significa E -- || significa OU
  console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

//--------------------------banco de dados---------------------------

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`pare`);
  else if (cor == "amarelo") console.log(`preste atenção`);
  else if (cor == "verde") console.log(`siga`);
  else
    console.log("você informou cores diferente de verde, amarelo ou vermelho");
}
sinaleiro("vermelho");

//desvio condicional if com bloco de comandos

var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`terminei!`);

//desvio condicional if inline (ternário)
//validação (algo = algo) ou (algo > algumacoisa)
//? (if)
//se for verdadeiro
//se for falso
//testeDeValidação == ? "bla bla" : ("ble ble")
var preco = 500;
var resultado = preco < -100 ? "ta barato" : "vash ta caro!";
console.log(resultado);
// if (preco <-100);
// console.log(`ta barato`)
// else
// console.log(`vish ta caro!`)
