/*
Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir: 

Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End. 

Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java. 

Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.

Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
 */
let menu = `
    ====== Escoja a qué desarrollo se quiere inclinar =====
    1. Front-End
    2. Back-End
    3. Exit    
`;

let opcion = parseInt(prompt(menu).trim());

let frontendMenu = `
    ====== Estás en el área de Front-End =====
    **** Escoge qué lenguaje quieres aprender ****
    1. React
    2. Vue
`;

let backendMenu = `
    ====== Estás en el área de Back-End =====
    **** Escoge qué lenguaje quieres aprender ****
    1. C#
    2. Java
`;

switch (opcion) {
    case 1:
        let frontOpcion = parseInt(prompt(frontendMenu));
        switch (frontOpcion) {
            case 1: 
                alert("Has elegido React")
                let opcionExtra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.")
                while (opcionExtra == "ok"){
                    let nuevaTecnología = prompt("¿Cuál?");
                    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
                    opcionExtra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo."); 
                }
                break;
            case 2: 
                alert("Has elegido Vue")                                
                while (opcionExtra == "ok"){
                    let nuevaTecnología = prompt("¿Cuál?");
                    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
                    opcionExtra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo."); 
                }
                break;
            default:
                alert("Opción inválida")
        }
        break;
    case 2:
        let backOpcion = parseInt(prompt(backendMenu));
        switch (backOpcion) {
            case 1: 
                alert("Has elegido C#")    
                let opcionExtra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.")            
                while (opcionExtra == "ok"){
                    let nuevaTecnología = prompt("¿Cuál?");
                    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
                    opcionExtra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo."); 
                }
                break;
            case 2: 
                alert("Has elegido Java")                
                while (opcionExtra == "ok"){
                    let nuevaTecnología = prompt("¿Cuál?");
                    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
                    opcionExtra = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo."); 
                }
                break;
            default:
                alert("Opción inválida")
        }
        break;
    case 3:
        alert("Saliendo...")
        break;
    default:
        alert("Opción inválida")
}
