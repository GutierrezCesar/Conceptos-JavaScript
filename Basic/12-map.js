// Map 

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicializacion

myMap = new Map([
    ["name", "Cesar"],
    ["email", "cesarjassongutierrezdiaz@gmail.com"],
    ["age", 27]
])

console.log(myMap)

// Metodos y proiedades

// set - actualizar o agregar un elemento

myMap.set("nombre", "Jasson") // agrega un nuevo valor
myMap.set("nombre", " ") // actualiza el valor
console.log(myMap)

// get - muestra el valor

myMap.get("name")
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has - buscar un elemento

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete

myMap.delete("email") 
console.log(myMap)

// Keys, values y entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size
console.log(myMap.size)

// clear - borrar todo el mapa

myMap.clear()
console.log(myMap)



