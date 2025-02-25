// Loops o bloques

// for
console.log("-----FOR-----")
for (let i=0; i < 5; i++) {
    console.log(`hola ${i}`)
} 

const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i<numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while
console.log("\n-----WHILE-----")
let i = 0
while(i < 5){
    console.log(`hola ${i}`)
    i++
}

 // Bucle infinito   
//while(true){   
//}

// DO WHILE
console.log("\n-----DO WHILE-----")
i = 6
do {
    console.log(`hola ${i}`)
    i++
} while (i < 5)

// for of
console.log("\n-----FOR OF-----")
myArray = [1, 2, 3, 4]

mySet = new Set (["Cesar", "Jasson", "Gutierrez", 37, true, "cesarjassongutierrezdiaz@gmail.com"])

myMap = new Map([
    ["name", "Cesar"],
    ["email", "cesarjassongutierrezdiaz@gmail.com"],
    ["age", 27]
])

myString = "Hola mundo"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for(let valor of myString){
    console.log(valor)
}

// Buenas practicas
console.log("\n-----Buenas practicas-----")

for (let i=0; i < 10; i++) {
    if(i == 3) {
        continue
    } else if(i == 6){
        break
    }
    console.log(`hola ${i}`)
} 

