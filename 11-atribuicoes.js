//incremento e decrimento com valor especifico
//operadores de atribuição aritmetrica
var x = 10;
var y = 5;

console.log("--------------------------");
console.log("x =", x, "|y =", y);

x += y; //x=x+y
console.log("x =", x, "|y =", y);

x -= y;
console.log("x =", x, "|y =", y);

x *= y; //x=x *y
console.log("x =", x, "|y =", y);

x /= y; //x = x/y
console.log("x =", x, "|y =", y);

x **= y; //x = x elevado a y
console.log("x =", x, "|y =", y);

x %= y; //x= resto da divisão inteira de x por y
console.log("x =", x, "|y =", y);

x = 13;
x %= y; // resto da divisão inteira de x por y
console.log("x =", x, "|y =", y);
