// Array

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializacion

myArray = [1]
myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Cesar", "Jasson", "Gutierrez", 37, true]
myArray2 = new Array("Cesar", "Jasson", "Gutierrez", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)

myArray2[0] = "Cesar"
// myArray2[1] = "Jasson"
myArray2[2] = "Gutierrez"
myArray2[4] = "Diaz"

console.log(myArray2)

myArray = []
myArray[0] = "Cesar"
// myArray2[1] = "Jasson"
myArray[2] = "Gutierrez"

console.log("MyArray: ",myArray)

// Metodos comunes

myArray = []

// push y pop / push - agrega elementos al array y pop elimina el ultimo elemento del array

myArray.push ("Cesar")
myArray.push ("Jasson")
myArray.push ("Diaz")
myArray.push (27)

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo elemento y lo devuelve
myArray.pop() 

console.log(myArray)

// shift y unshift - shift elimina el primer elemento -devuelve der array y unshift agrega  un conjunto elemento al inicio del array

myArray.shift()
console.log(myArray)

myArray.unshift("Cesar", "-")
console.log (myArray)

// length - Longitud del array

console.log(myArray.length)

// clear - borrar un array completo

myArray = []
myArray.length = 0 // alternativa - myArray.clear()
console.log(myArray)

// slice - devuelve una copia de un array, especificando segun el indice

myArray.push("Cesar", "Jasson", "Gutierrez", 27, true)
let newArray = myArray.slice(1,3)
console.log(myArray)
console.log(newArray)

// splice - elimina valores de array, indicado desde que indice. 

myArray.splice(1,3)
console.log(myArray)

//Tambien sustituye elementos nuevos indicando el indice
myArray = ["Cesar", "Jasson", "Gutierrez", 37, true]
myArray.splice(1,2,"Nuevo elemento")
console.log(myArray)