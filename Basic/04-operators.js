// Operadores

// Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicacion
console.log(a / b) // division

console.log(a % b) // modulo
console.log(a ** b) // exponente

a++
console.log(a) // incremento

b--
console.log(b) // decremento

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)

myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)

myVariable **= 2
myVariable -= 2
myVariable *= 2
myVariable %= 2

// Operadores de comparacion

console.log(a > b) // mayor que
console.log(a < b) // menor que
console.log(a >= b) // mayor igual que
console.log(a <= b) // menor igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6) // Igualdad por valor
console.log(a == "6") 
console.log(a === "6") // Igualdad por identidad (por tipo y valor)
console.log (a != 6) // desigualdad por valor
console.log (a !== "6") // desigualdad por identidad (por tipo y valor)
console.log(0 == false)
console.log(1 == true)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(undefined == null)
console.log(undefined === null)

/* Truthy values (valores verdaderos)
    Todos los numeros positivos y negativos menos el cero
    El boolean true 
*/


/* False values (valores falsos)
    0
    0n
    null
    underfined
    NaN
    El boolean false
    Vadenas de textos vacias
*/

// Operadores logicos

// and (&&)
console.log("----AND----")
console.log (5 > 10 && 15 > 20)
console.log (5 < 10 && 15 < 20)
console.log (5 > 10 && 15 < 20)

// or (||)
console.log("----OR----")
console.log (5 > 10 || 15 > 20)
console.log (5 < 10 || 15 < 20)
console.log (5 > 10 || 15 < 20)

console.log (5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log("----NOT----")
console.log(!false)
console.log(!true)
console.log (!(5 > 10 && 15 > 20))
console.log (!(5 > 10 || 15 > 20))

// Operadores ternarios (? :)

const isRaining = false
isRaining ? console.log("Esta lluviendo") : console.log("No esta lluviendo")

