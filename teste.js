//console.log("Hello World!")

let nome = "Beatriz"

// não pode alterar
const sobrenome = "Seraphim"

console.log(nome + " " + sobrenome)

nome = "Catherine"

console.log(nome + " " + sobrenome)

let numero1 =30
let numero2 = 10

console.log(numero1 + numero2)

function dividir(num1, num2){
    if (num2 === 0){
        return "Não é possível dividir por zero!"
    }
    
    return num1 / num2
}

let resultado = dividir(10,0)
console.log(resultado)
//console.log(dividir(10,5))

const soma = (num1, num2) => num1 + num2

console.log(soma(20, 30))

function tabuada(num1){
    for(let contador = 1; contador <= 10; contador ++){
        console.log(`${num1} x ${contador} = ${num1 * contador}`)
    }
}

tabuada(5)

const nomes = ["Gabriel", "Daisy", "Guilherme"]

nomes.forEach(nome => console.log(nome))

