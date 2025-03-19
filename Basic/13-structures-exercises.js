// 1. Crea un array que almacene cinco animales
console.log("-------Ejercicio 1-------------")
const animals = ["Perro", "Gato", "Elefante", "Tigre", "León"];
console.log(animals);


// 2. Añade dos más. Uno al principio y otro al final
console.log("\n-------Ejercicio 2-------------")
// ['Rata', 'Perro', 'Gato', 'Elefante', 'Tigre', 'León', 'Canguro']
animals.unshift("Rata")
animals.push("Canguro")
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
// ['Rata', 'Perro', 'Gato', 'Elefante', 'Tigre', 'León', 'Canguro']
console.log("\n-------Ejercicio 3-------------")
animals.splice(2,1)
console.log(animals);


// 4. Crea un set que almacene cinco libros
console.log("\n-------Ejercicio 4-------------")
let books = new Set(["Libro 1", "Libro 2", "Libro 3", "Libro 4"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido
console.log("\n-------Ejercicio 5-------------")
books.add("Libro 5")
books.add("Libro 2") // No se va agregar el repetido
console.log(books)

// 6. Elimina uno concreto a tu elección
console.log("\n-------Ejercicio 6-------------")
books.delete("Libro 3")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("\n-------Ejercicio 7-------------")
let mes = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],
    [11, 'Noviembre'],
    [12, 'Diciembre'],
])

console.log(mes)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("\n-------Ejercicio 8-------------")

let buscarMes = 5
let opcionMes = mes.has(buscarMes)

if(opcionMes == true){
    console.log(`El mes buscado es ${mes.get(buscarMes)}`)
} else {
    console.log(`El mes ${buscarMes} no existe`)
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log("\n-------Ejercicio 9-------------")
mes.set("Verano", ["Diciembre", "Enero", "Febrero"])
console.log(`Los meses de verano son: ${mes.get("Verano")}`)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map  
console.log("\n-------Ejercicio 10-------------")
let myArray = ["Prueba1", "Prueba2", "Prueba1"]
console.log('Mi array =',myArray)

let mySet = new Set(myArray)
console.log('Mi set =',mySet)

let myMap = new Map()
myMap.set("prueba", mySet)

console.log("Mi map =", myMap.get("prueba"))

