function idade(ano1) {
  return 2024 - ano1;
}
console.log(`A pessoa tem a idade: ${idade(2007)}`);

//exercício dois
function quantidade(litros, km) {
  return litros * km;
}
console.log(
  `Ele pode viajar com 40 litros de combustível : ${quantidade(40, 12)} kms`
);

// console.log("---------------------------------atividade 2---------------------------------------" );

function votar(idade) {
  if (idade >= 16 && idade < 18)
    console.log(`você pode votar ,mas não é obrigado`);
  else if (idade >= 16) console.log(`você pode votar!`);
  else console.log(`você não pode votar`);
}

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`Você não pode Votar!`);
      break;
    case idade >= 16 && idade < 18:
      console.log(`Você pode votar, mas não é obrigatorio!`);
      break;
    default:
      console.log(`Você pode votar`);
      break;
  }
}
votacao(16);
