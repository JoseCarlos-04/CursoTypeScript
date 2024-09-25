console.log("Hola mundo");

/**
 * Tipos de datos
 * 
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 */

var nombre:string = "José Carlos"; // Variable global
let apellido:string = "Parrilla Romero"; // Variable normal
const PI:number = 3.1415; // Variable constante

console.log("Hola "  + " José Carlos");
console.log(nombre + apellido);
console.log(nombre, apellido);
console.log(`Hola ${nombre}`);

let a:string, b:string, c:number;
a = "texto";
b = "texto 2";
c = 6;

// Array de Datos
let alumnos1A:string[] = ["Juan", "José", "Alex"];
let alumnos2A:string[] = ["Fran"];
let alumnos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"];

let valores:(string | number)[] = ["Hola", 4];
