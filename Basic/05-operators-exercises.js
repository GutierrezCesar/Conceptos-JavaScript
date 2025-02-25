// 1. Crea una variable para cada operación aritmética
let a = 5, b = 6
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let datoUno = 10
let datoDos = 8

let suma = datoUno
suma += datoDos

let resta = datoUno
resta -= datoDos

let multiplicacion = datoUno
multiplicacion *= datoDos

console.log("La suma es:", suma)
console.log("La resta es:", resta)
console.log("La multiplicacion es:", multiplicacion)

// 3. Imprime 3 comparaciones verdaderas con diferentes operadores de comparación
console.log (datoUno > datoDos)
console.log (datoUno != datoDos)
console.log (datoUno >= datoDos)

// 4. Imprime 3 comparaciones falsas con diferentes operadores de comparación
console.log (datoUno < datoDos)
console.log (datoUno == datoDos)
console.log (datoUno <= datoDos)

// 5. Utiliza el operador lógico and
console.log(datoUno > datoDos && a < b)

// 6. Utiliza el operador lógico or
console.log(datoUno > datoDos || a > b)

// 7. Combina ambos operadores lógicos
console.log(datoUno > datoDos && a > b || datoUno > a)

// 8. Añade alguna negación
console.log(!(datoUno > datoDos || a > b))

// 9. Utiliza el operador ternario
let age = 17
console.log(age >= 18 ? "Mayor de edad": "Menor de edad")

// 10. Combina operadores aritméticos, de comparáción y lógicas
a = 15, b = 20
let c = 5
let resultado = (a - b) > (a + b) || (c == b - a)
console.log(resultado)