//funcoes no java script

// function sayHello() {
//   return "Hello World";
// }

// let message = sayHello()
// console.log(message)


// function saudacao() {
//     return "seja vem vindo!";
// }

// let mensagem = saudacao()
// console.log(mensagem)

// function multiply(a, b) {
//     if(isNaN(a) || isNaN(b)){
//         return "Erro, digite um valor valido"
//     }
//   return a * b;
// }
// let num1 = Number(prompt("Digite um numero: "))
// let num2 = Number(prompt("Digite um numero: "))
// let produto = multiply(num1,num2);
// console.log(produto);


// function multiply(a, b) {
//     if(isNaN(a) || isNaN(b)){
//         return "Erro, digite um valor valido"
//     }
//   return a + b;
// }
// let num1 = Number(prompt("Digite um numero: "))
// let num2 = Number(prompt("Digite um numero: "))
// let produto = multiply(num1,num2);
// console.log(produto);

// function verseepar(a) {
//     if(isNaN(a)){
//         return "Erro, digite um valor valido"
//     }
//   if ( a % 2 === 0){
//     return "O Numero é par"

//   }
//   else {
//     return "O numero é impar"
//   }
// }
// let num1 = Number(prompt("Digite um numero: "))

// let produto = verseepar(num1)
// console.log(produto);



function verificarAprovacao(a) {
    if (isNaN(a)) {
        return "Erro, digite um valor valido"
    }
    if (a >= 7) {
        return "Aprovado"

    }
    else if (a >= 5) {

        return "Recuperação"

    }
    else {
        return "Reprovado"

    }

}


function verificarmedia() {
    let med1 = Number(prompt("Digite um numero: "));
    let med2 = Number(prompt("Digite o segundo numero: "));
    let med3 = Number(prompt("Digite o terceiro numero: "));
    let num1 = (med1 + med2 + med3) / 3
    let produto = verificarAprovacao(num1)
    return produto;

}

let resultadofinal = verificarmedia();
console.log(resultadofinal);



