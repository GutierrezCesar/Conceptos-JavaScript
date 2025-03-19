// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("-------Ejercicio 1-------------")
let nombre = "Cesar"

if(nombre){
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("\n-------Ejercicio 2-------------")
let usuario = "X14049"
let password = "Cesar01"

if(usuario == "X14049" && password == "Cesar01"){
    console.log ("El usuario y password fueron ingresados correctamente")
} 

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("\n-------Ejercicio 3-------------")
let numero = 0

if(numero > 0){
    console.log("El numero es positivo")
} else if (numero == 0) {
    console.log("El numero es cero")
} else {
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("\n-------Ejercicio 4-------------")

let age = 19

if (age >= 18) {
    console.log (`La persona es mayor de edad, tiene ${age} anios. Si puede votar`)
} else {
    console.log(`La persona es menor de edad. Le falta ${18-age} `)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log("\n-------Ejercicio 5-------------")

let persona = age >= 18 ? "La persona es adulta" : "La persona es menor de edad"
console.log(persona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("\n-------Ejercicio 6-------------")

let mes = "Febrero"
let mesValor = mes.toLowerCase()

if ( mesValor == "diciembre" || mesValor == "enero" || mesValor == "febrero" ) {
    console.log ("Estacion del anio invierno")
} else if (mesValor == "marzo" || mesValor == "abril" || mesValor == "mayo"){
    console.log("Estacion del anio primavera")
} else if (mesValor == "junio" || mesValor == "julio" || mesValor == "agosto"){ 
    console.log("Estacion del anio verano")
} else if (mesValor == "septiembre" || mesValor == "octubre" || mesValor == "noviembre"){ 
    console.log("Estacion del anio otonio")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("\n-------Ejercicio 7-------------")

if (mesValor ==  "enero" || mesValor ==  "marzo" || mesValor ==  "mayo" || mesValor ==  "julio" || mesValor ==  "agosto" || mesValor ==  "octubre" || mesValor ==  "diciembre"){
    console.log (`El mes de ${mesValor} cuenta con 31 dias`)
} else if (mesValor ==  "abril" || mesValor ==  "junio" || mesValor ==  "septiembre" || mesValor ==  "noviembre") {
    console.log (`El mes de ${mesValor} cuenta con 30 dias`)
} else if (mesValor ==  "febrero"){
    console.log (`El mes de ${mesValor} cuenta con 28 dias`)
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("\n-------Ejercicio 8-------------")
let saludo = "Hola"
let menu = 
`--- Escoge el idioma de saludo -----
1. Ingles
2. Frances
3. Noruego
4. Exit
`
let opcion = 2
switch (opcion){
    case 1:
        console.log(`${saludo} en ingles: Hi!`)
        break
    case 2:
        console.log(`${saludo} en frances: Bonjour`)
        break   
    case 3:
        console.log(`${saludo} en noruego: hallo`)
        break
    case 4:
        console.log('Saliendo del programa')
        break
    default:
        console.log(`Opcion invalida!`)
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
console.log("\n-------Ejercicio 9-------------")
let insertarMes = "Julio"
let insertarMesValor = insertarMes.toLowerCase()

switch (insertarMesValor){
    case "diciembre":        
    case "enero":        
    case "febrero":
        console.log(`El mes de ${insertarMesValor} la estacion del anio es invierno`)
        break   
    case "marzo":        
    case "abril":        
    case "mayo":
        console.log(`El mes de ${insertarMesValor} la estacion del anio es primavera`)
        break
     case "junio":         
    case "julio":        
    case "agosto":
        console.log(`El mes de ${insertarMesValor} la estacion del anio es verano`)
        break
    case "septiembre":        
    case "octubre":     
    case "noviembre":
        console.log(`El mes de ${insertarMesValor} la estacion del anio es otonio`)
        break       
    default:
        console.log(`Mes no valido!`)
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
console.log("\n-------Ejercicio 10-------------")
switch (insertarMesValor){
    case "diciembre":        
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
        console.log(`El mes tiene 31 dias`)
        break
    case "febrero":
        console.log(`El mes tiene 28 dias`)
        break     
    case "abril": 
     case "junio":         
    case "julio":
    case "septiembre": 
    case "noviembre":
        console.log(`El mes tiene 30 dias`)
        break       
    default:
        console.log(`Mes no valido!`)
}