/*
Debe pedir al usuario responder 3 preguntas: 

- ¿Cuál es tu nombre?
- ¿Cuántos años tienes?
- ¿Qué lenguaje de programación estás estudiando? 

A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas. 

Al final, el sistema mostrará el mensaje: 

"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"
*/

let nombre = prompt("¿Cuál es tu nombre?")
let edad = prompt("¿Cuántos años tienes?")
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?")

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`)

let respuesta

while (true) {
    let pregunta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`)
    if (pregunta == 1) {
        alert("> ¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
        break
    } else if (pregunta == 1) {
        alert("> Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
        break
    } else {
        alert ("Oh!, lo siento. Inserto un dato incorrecto, vuelva a intentarlo! ")
    }
}


