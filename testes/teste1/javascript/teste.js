// var a = 10
// var b = 20
// var c = null

// console.log('A: ' + a)
// consnole.log('B: ' + b)
// console.log('C: ' + c)

// // inversão dos valores

// c = a
// b = c
// c = 20
// a = c
// c = null

// console.log('A2: ' + a)
// console.log('B2: ' + b)
// console.log('C2: ' + c)

// var nota = prompt('Digite a nota:')

// if ( nota > 7 ) {
//     console.log('Aprovado')
// } else if  ( nota == 7) {
//     console.log('Aprovado na media')
// } else {
//     console.log('Reprovado')
// }
// var number = prompt('escolha um número:')

// switch ( number ) {
//     case number <= 10 && number >= 5:
//         alert('seu número é algo entre 5 e 10')
//         break;

//     default:
//         alert('não sei qual é o seu número')
//         break;
// }

// function calcularPares(num) {
//     if ((num % 2) == 0) {
//         console.log('O número é par')
//     } else {
//         console.log('O número é impar')
//     }
// }
// var num = prompt('Escolha um número: ')

// var resultado = calcularPares(num)
// console.log(resultado)

var calcularPares = function(number){
    number = 2
    if (( number % 2 ) == 0) {
        number = 'Par'
    } else {
        number = 'Impar'
    }
    return number
}

console.log(calcularPares())


