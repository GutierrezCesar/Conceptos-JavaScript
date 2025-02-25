// Strings
let myName = "Cesar"
let gretting = "Hola, " + myName
console.log(gretting)
console.log(typeof gretting)

// Longitud 
console.log(gretting.length)

// Acceso a caracteres
console.log(gretting[0])
console.log(gretting[1])

// Metodos comunes
console.log(gretting.toUpperCase()) // convierte todo a mayuscula
console.log(gretting.toLowerCase()) // convierte todo a minuscula
console.log(gretting.indexOf("Cesar")) // Encuentra la palabra en la posicion mostrada anteriormente
console.log(gretting.indexOf("Jasson")) // Busca la palabra, no existe le pone -1, si encuentra lo ubica en la posicion que inicia
console.log(gretting.includes("Cesar")) // Comprueba si existe - genera un true o false
console.log(gretting.includes("Jasson")) // Comprueba si existe - genera un true o false
console.log(gretting.slice(0,8)) // Devuelva la cantidad de caracteres que especificas
console.log(gretting.replace("Hola","Hello")) // Reemplaza una palabra por otra

// Template literals (plantillas literales)
let message = `Hola, este 
es mi curso 
de JavaScript`
console.log(message) 

let email = "cesarjassongutierrezdiaz@gmail.com"

console.log (`Hola, ${myName} y mi correo es: ${email}`)


