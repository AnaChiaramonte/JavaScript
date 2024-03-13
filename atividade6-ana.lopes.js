const numerinhos = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(numerinhos);

for (let diag = 0; diag < numerinhos.length; diag++) {
  console.log(numerinhos[diag][diag]);
}
