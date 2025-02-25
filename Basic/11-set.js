// set

// declaracion

let mySet  = new Set()
console.log (mySet)

// Inicializacion 
mySet = new Set (["Cesar", "Jasson", "Gutierrez", 37, true, "cesarjassongutierrezdiaz@gmail.com"])
console.log (mySet)

// Metodos comunes

// add y delete - add agrega un dato al final, delete elimina un elemento que indicamos

mySet.add("Mi pagina web")
console.log(mySet)

console.log(mySet.delete("Mi pagina web"))

console.log(mySet)

// has - buscar elemento

console.log(mySet.has("Cesar"))

// size - tamanio o longitud

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// Set no admite duplicados y Array si permite duplicados
mySet.add("Cesar")
console.log(mySet)

