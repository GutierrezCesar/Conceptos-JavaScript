// Funciones

// Simple
console.log("---- F. Simple-----")

function myFunc(){
    console.log("Hola, funcion!")
}

for(let i = 0; i< 5; i++){
    myFunc()
}

// Funciones con Parametros
console.log("\n---- F. Parametros-----")

function myFuncWithParams(name){
    console.log(`Hola ${name}`)
}

myFuncWithParams("Augusto")
myFuncWithParams("Cesar")

// Funciones anonimas
console.log("\n---- F. Anonimas-----")

const myFunc2 = function(name) {
    console.log(`Hola ${name}`)
}

myFunc2("Jasson")

// Funciones flechas(Arrow functions)
console.log("\n---- F. flechas(Arrow functions)-----")
