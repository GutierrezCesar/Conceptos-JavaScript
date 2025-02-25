// 1. Concatena dos cadenas de texto
let saludo = "Hola"
let planeta = "tierra"

console.log(saludo, planeta)

// 2. Muestra la longitud de una cadena de texto
console.log("La longitud de caracteres para saludo es: " + saludo.length)

// 3. Muestra el primer y último carácter de un string
console.log("El primer caracter es: " + saludo[0])
console.log("El ultimo caracter es: " + saludo[(saludo.length)-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadenaDetexto = `Aprendiendo 
JavaScript desde cero`
console.log(cadenaDetexto)

// 6. Interpola el valor de una variable en un string
let name = "Cesar"
let age = 25
console.log(`Mi nombre es ${name} y tengo ${age} de edad`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = `Aprendiendo JavaScript desde cero`
console.log(texto.replace(/ /g, "_"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto.includes("Aprendiendo"))

// 9. Comprueba si dos strings son iguales
let textoUno = "Mundo"
let textoDos = "Planeta"
console.log(textoUno == textoDos)

// 10. Comprueba si dos strings tienen la misma longitud
let comprobando = textoUno.length == textoDos.length
console.log("La cantidad de longitudes de ambos es: " + comprobando)