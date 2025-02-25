// Tipos de datos primitivos

// String(Cadenda de texto)
let name = "Cesar Gutierrez"
let alias = "Chechi"
let email = "cesarjassongutierrezdiaz@gmail.com"

// Numeros
let age = 37 // Entero
let height = 1.65 // Decimal

// Booleanos (boolean)
let isStudent = true
let isTeacher = false

// Undefined - Mo tiene valor inicial
let undefinedValue
console.log(undefinedValue)

// Null - Ausencia de valor
let nullValue = null
console.log(nullValue)

// Symbol - Valores unicos
let mySymbol = Symbol ("mysymbol")
console.log(mySymbol)

// BigInt - Numero grande
let myBigInt = BigInt(213123143215342523452344523452432423)
let myBigInt2 = BigInt(213123143215342523452344523452432423n)
console.log(myBigInt)
console.log(myBigInt2)

// Mostramos los tipos de datos - typeof
console.log(typeof alias)
console.log(typeof nullValue)