// crie e utilize uma classe "sorvete" contendo as propriedades : sabor,preço e tamanho ( P | M | G )
//Crie um sorvete de morango grande
//crie um sorvete de chocolate pequeno
//Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco(){
    return this.preco// proteção
  }
  sorvete() {
    console.log(
      `sabor = ${this.sabor}, preço = ${this.getPreco()}, tamanho = ${this.tamanho}`
    );
  }
  setPreco(novopreco) {
    this.preco = novopreco; // MUDAR O PREÇO "SET"
  }
}

const morango = new sorvete(`morango`, 6, `G`);
morango.sorvete();

const chocolate = new sorvete(`chocolate`, 4, `P`);
chocolate.sorvete();

const melancia = new sorvete(`melancia`, 5, `M`);
melancia.sorvete();

morango.setPreco(10.51);
morango.sorvete();

//----------------------------------------------------------------------------------------------------

//atividade 1
function comparar(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}
console.log(comparar("Olá", "OLÁ"));
console.log(comparar("Olá", "TCHAU"));

// //atividade 2
function extrairNumero(extrair) {
  return extrair.match(/\d+/g).map(Number);
}
var texto = "Eu comprei 2 sorvetes por R$ 6";
var numeros = extrairNumero(texto);
console.log("Números encontrados: ", numeros);

// //atividade 3
function invertendo(frases) {
    return frases.split(" ").reverse().join(" ")
}
var fraseOriginal = "Meu nome é Ana clara"
var fraseInvertida = invertendo(fraseOriginal)
console.log("Frase invertida:", fraseInvertida)

