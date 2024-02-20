const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);

//criando variaveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossaro", "Anquinossauso"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); // retorna o primeiro indice do array
console.log(""); // pular linha
console.table(dinos); // cria tabela com os itens do array
console.log("o vetor tem ", dinos.length, "elementos"); //mostrar quantidade de itens

//adicionando elementos ao vetor existente

dinos.push("Brontossauro", "velocirapido"); // array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("triceratops"); // adiciona itens no inicio do array
console.table(dinos);

//alterando elementos com base no indice (posição)

dinos[3] = "titanossauro";
console.table(dinos);

//obtendo um elemento com base em seu indice
console.log("Primeira posição:", dinos[0]); //retorna um elemento especifico
console.log("segunda posição:", dinos[1]);
console.log("item da posição 20:", dinos[20]);//retorna indefinido

//removendo elementos do vetor
dinos.pop()//remove o ultimo do vetor
console.log(dinos);

dinos.shift();//remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1);//remove o elemento a partir do indice 1,contando 1
console.table(dinos); 
