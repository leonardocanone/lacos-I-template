// Aula Laços I (ou loops)

// while - Prática guiada

// let numero = Number(prompt("Digite um número:"))

// let soma = 0

// while(numero !== 0){
// soma = soma + numero

// console.log(numero);
// // console.log(soma);

// numero = Number(prompt("Digite um outro número:"))

// }

// console.log("Resultado da soma =",soma);


// Aqui embaixo foram invenções minhas para simular a Prática guiada do While de outras maneiras. Nestes casos eu criei um Array para fazer as simulações.

// const numero = [10, 3, 7, 50, 0]

// let soma = 0

// for (let i = 0; i < numero.length; i++){
//     // soma = soma + numero[i]
//     soma += numero[i]
//     console.log(numero[i]);
// }

// console.log(soma);

// A diferença entre a resolução de cima e a de baixo é que no de cima a condição de continuação é "i < numero.lenght", já na de baixo a condição de continuação é "numero2[i] !== 0", e o resultado no Console é praticamente o mesmo. 

// const numero2 = [10, 3, 7, 50, 0]

// let soma2 = 0

// for (let i = 0; numero2[i] !== 0 ; i++){
//     // soma = soma + numero[i]
//     soma2 += numero2[i]
//     console.log(numero2[i]);
// }

// console.log(soma2);


// for - Prática guiada

// let numero = 6
// for (let i = 0; i <= numero; i++){
// console.log(i);
// }
// a resolução acima é fiel ao que foi pedido no slide


// for com arrays - Prática guiada

// const array = [4, 89, 23, 10, 6, 65, 2]

// for(let i = 0; i < array.length; i++){
//     console.log(`O elemento de índice ${i} é ${array[i]}`);
// }
// a resolução acima é fiel ao que foi pedido no slide    
// Vale a pena simular aqui o seguinte caso, se na condição de continuação a gente digite "i <= array.lenght", ele vai imprimir no Console que "O elemento de índice 7 é undefined", e pra corrigir isso basta acrescentar o -1 depois do lenght. Como disse a Ana, se a gente for usar array.length, tem que usar apenas < (MENOR). Se for usar <= (MENOR OU IGUAL) tem que ser array.length-1, porque o último índice do array vai ser sempre 1 a menos que o comprimento dele mesmo, uma vez que ele inicia no índice ZERO.  


// Aqui abaixo dois exemplos de tabuada que peguei do material assíncrono e acabei deixando aqui no código como base pra estudo.
// for(let i = 1; i <= 10; i++){
// 	console.log(`6 x ${i} = ${6*i}`)
// }

// for(let i = 0; i < 10; i++){
// 	console.log(`6 x ${i} = ${6*i}`)
// }


// Exercício de fixação

// Exercício 1
// let tipoUsuario = prompt("Digite seu tipo de usuário, podendo ser A, B ou C..!")

// while(tipoUsuario.toLocaleUpperCase() !== "A"){

//     console.log(`Usuário digitado: ${tipoUsuario} = "Acesso negado!"`);

//     tipoUsuario = prompt("Acesso NEGADO, digite novamente!")

// }

// console.log(`Usuário digitado: ${tipoUsuario} = "Boas-vindas, admin!"`);

// Acima o exercício 1 fiel ao pedido pelo enunciado.

// Exercício 2
// Tinha resolvido o exercício 2 sem criar uma variável, porém depois de ver dos colegas achei melhor criar a variável tabuada, e assim está logo abaixo na primeira resolução, porém decidi manter a primeira que fiz de uma maneira mais direta.

// let tabuada = 2
// for(let i = 1; i <= 10; i++){
//     console.log(`${tabuada} x ${i} = ${tabuada*i}`);
// }


// for(let i = 1; i <= 10; i++){
//     console.log(`2 x ${i} = ${2*i}`);
// }


// // Exercício 3
const cidadesItalia = ["Roma", "Firenze", "Venezia"]

for (let i = 0; i < cidadesItalia.length; i++){
    console.log(cidadesItalia[i].toLocaleUpperCase());
}
// O exercício 3 foi resolvido fiel ao enunciado. 
// Sobre o erro que pode dar nesse exercício 3 que pode ser difícil de ser identificado caso aconteça. O correto sempre é utilizar i < array.length ou i <= array.length-1. Caso a gente coloque o igual e não coloque -1 depois do length, podem acontecer duas coisas. Caso não apliquemos um método no código, como neste caso o UpperCase, dará um undefined no console após a impressão das 3 cidades italianas do exemplo, no entanto quando há um método aplicado como no exemplo acima, o Console exibe o seguinte erro, o qual vamos explicar a seguir "Uncaught TypeError: Cannot read properties of undefined (reading 'toLocaleUpperCase') at script.js:116:34". Como me respondeu a instrutora Ana, esse erro vai acontecer porque na última iteração desse for, o laço vai passar por um elemento que não existe no array, retornando undefined, e quando estamos aplicando o método toUpperCase() em um undefined, ele vai apontar esse erro, de que não é possível "ler" o undefined e aplicar o método. 

// Aqui abaixo uma forma alternativa de simular o Exercício 1, neste caso utilizando Arrays.
const usuario = ["B", "C", "D", "E", "A", "F", "G"]
let i = 0

while(usuario[i] !== "A"){

    console.log(`Usuário digitado: ${usuario[i]} :( "Acesso negado!"`);

    i++
}
console.log(`Usuário digitado: ${usuario[i]} =) "Boas-vindas, admin!"`);


// Abaixo aqui algumas outras simulações de como resolver o que foi pedido no enunciado da Prática Guiada do While, neste caso utilizando Arrays, como já fizemos acima, porém com ainda mais simulações, tanto em While quanto em For.
// const array = [10, 3, 7, 50, 5, 0, 10, 15, 0]
// let i2 = 0
// let soma = 0

// while(array[i2] !== 0){
//     soma = soma + array[i2]
//     console.log(array[i2]);

//     i2++

// }

// console.log(array);
// console.log("Soma do array até encontrarmos o número 0 = ",soma);


// const array2 = [10, 3, 7, 50, 5, 0, 10, 15, 0]
// let soma2 = 0

// for (let i3 = 0; array2[i3] !== 0; i3++){

//     soma2 += array2[i3]
//     console.log(array2[i3]);
// }
// console.log("Soma do array até encontrarmos o número 0 = ",soma2);


