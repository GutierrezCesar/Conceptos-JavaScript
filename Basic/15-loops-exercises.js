// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 10
console.log("-------Ejercicio 1-------------")

for (let i = 1; i <= 10; i++) {
    console.log(`Numero: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("\n-------Ejercicio 2-------------")

let suma = 0

for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(`La suma de 1 al 100 es ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("\n-------Ejercicio 3-------------")

let numeroInicial = 1

while (numeroInicial <= 50) {
    if (numeroInicial % 2 == 0) {
        console.log(`Numero: ${numeroInicial}`)
    }
    numeroInicial++
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("\n-------Ejercicio 4-------------")

let arrayNombres = ["Cesar", "Harold", "Angel", "Jorge", "Richard"]

for (let i = 0; i < arrayNombres.length; i++) {
    console.log(`${i+1} nombre: ${arrayNombres[i]}`)
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("\n-------Ejercicio 5-------------")

let stringTexto = "Numero de vocales"
let contador = 0

for (let valor of stringTexto){
    if(valor == "a" || valor == "e" || valor == "i" || valor == "o" || valor == "u" ){        
        contador++
    }
}
console.log(`El texto "${stringTexto}", tiene: ${contador} vocales`)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("\n-------Ejercicio 6-------------")
let arrayNumeros = [1, 2, 12, 10]
let producto = 1

for(let i = 0; i<arrayNumeros.length; i++){
    producto *= arrayNumeros[i]  
}
console.log(`Los numeros del array son: ${arrayNumeros.join(' ')}`)
console.log(`El producto del array es: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("\n-------Ejercicio 7-------------")

let resultadoFinal
let NumeroDeLaTabla = 12
for(let i=0; i <= NumeroDeLaTabla; i++){   
    resultadoFinal = i*NumeroDeLaTabla 
    console.log(`${i} * ${NumeroDeLaTabla} = ${resultadoFinal}`)
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("\n-------Ejercicio 8-------------")

let cadenaTexto = "Hola"
let invertirCadena = "" 
for(let i = cadenaTexto.length -1; i>=0 ; i--){    
    invertirCadena += cadenaTexto[i]
}
console.log(invertirCadena)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("\n-------Ejercicio 9-------------")

let fibonacci = [0,1]

for(let i=2; i < 10; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("\n-------Ejercicio 10-------------")

let arrayNumber = [11, 3, 5, 6, 18]
let newArrayNumber = []

for(let i = 0; i < arrayNumber.length; i++){    
    if(arrayNumber[i] > 10){
        newArrayNumber.push(arrayNumber[i])
    }
}
console.log(`El nuevo array es: ${newArrayNumber}`)  

let secondNewArray = arrayNumber.filter(arrayNumber => arrayNumber > 2 && arrayNumber < 6)
console.log(`El segundo nuevo array es: ${secondNewArray}`)




