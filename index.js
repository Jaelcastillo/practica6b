let nombre = prompt("¿Cuál es tu nombre?");

let apellido = prompt("¿Cuál es tu apellido?");

let anoNacimiento = prompt("¿En qué año naciste?");

let edad = 2026 - anoNacimiento;

let esMayorEdad = edad >= 18 ? "eres mayor de edad" : "eres menor de edad";

let mensaje = `Hola ${nombre} ${apellido}, usted nació en ${anoNacimiento} y tiene ${edad} años, y usted ${esMayorEdad}.`;

alert(mensaje);