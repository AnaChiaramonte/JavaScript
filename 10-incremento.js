//operadores de encremento e decremento
var idade = 16;
console.log(idade);

idade++; // idade = idade + 1
console.log(idade);

idade--; // idade = idade-1
console.log(idade);

console.log("--------------------------------");

var novaidade = idade++;
console.log("idade :", idade, "| Nova idade: ", novaidade);

var novaidade = ++idade;
console.log("idade :", idade, "| Nova idade: ", novaidade);

//operadores de atribuição aritmetrica

novaidade += 10; //novaidade= novaidade+1
console.log(novaidade);

novaidade -= 20;
console.log(novaidade);
