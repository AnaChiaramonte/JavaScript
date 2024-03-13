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
