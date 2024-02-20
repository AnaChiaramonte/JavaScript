//operadores logicos
var manha = true;
var sono = false;
console.log("-----------------------------");
console.log("Manhã:", manha, "| Estou com sono?", sono);
console.log("operador AND (E):", manha && sono); // && é o "e"/ comparando se é de manhã E estou com sono

console.log("operador OR (OU):", manha || sono); // || é o "ou"/ comparando se é de manhã OU estou com sono

sono = false;
console.log("----------------------------------------");
console.log("operador AND (E):", manha && sono); 
console.log("operador OR (OU):", manha || sono);

manha = false;
console.log("----------------------------------------");
console.log("operador AND (E):", manha && sono); 
console.log("operador OR (OU):", manha || sono);
