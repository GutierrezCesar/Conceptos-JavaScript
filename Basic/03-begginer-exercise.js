// 1. Escribe un comentario en una línea

    // Mi primer comentario en una linea

// 2. Escribe un comentario en varias líneas
    /*
        Mi segundo comentario
        en bloque de 
        lineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    let cadena = "Hola, mundo"
    let numero = 32
    let boolean = true
    let indefinido
    let nulo = null
    let simbolo = Symbol("simbolo")
    let bigInt = BigInt (213432411234n)    

// 4. Imprime por consola el valor de todas las variables
    console.log(cadena, numero, boolean, indefinido, nulo, simbolo, bigInt)
    
// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof cadena, typeof numero, typeof boolean, typeof indefinido, typeof nulo, typeof simbolo, typeof bigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    cadena = "Nuevo mensaje"
    numero = 322
    boolean = false
    indefinido
    nulo = null
    simbolo = Symbol("simbolo2")
    bigInt = BigInt (9007199254740991n)

    console.log(cadena, numero, boolean, indefinido, nulo, simbolo, bigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    cadena = 23
    numero = "123"
    boolean = Symbol("simbolo3")
    indefinido = null
    nulo = true
    simbolo = BigInt (9007199254740991n)
    bigInt = undefined

    console.log(cadena, numero, boolean, indefinido, nulo, simbolo, bigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
    const texto = "Hola"
    const decimal = 32.2
    const booleano = true
    const indefinidoValor = undefined
    const vacio = null
    const simboloValor = Symbol("simbolo")
    const bigIntValor = BigInt (213432411234n) 

    console.log(texto, decimal, booleano, indefinidoValor, vacio, simboloValor, bigIntValor)

// 9. A continuación, modifica los valores de las constantes

    /*texto = 45;
    decimal = 32.1
    booleano = false
    console.log(texto, decimal, boolean)*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

