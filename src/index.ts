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

console.log(alumnos);

let misDatos = {
    nombre: "José",
    apellidos: "Rodriguez",
    edad: 18
}

let configuracion = {
    versionTS: "Es6",
    versionCodigo: "1.0",
    ...misDatos
}

let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;

console.log(`${propiedad1} ${propiedad2}`);

enum EstadoTarea {"Pendiente" = "P", "En proceso" = "E", "Terminado" = "T"};

let estadoPendiente = EstadoTarea["En proceso"];

console.log(estadoPendiente);

if (EstadoTarea["En proceso"] == "E"){
    console.log(EstadoTarea);
}

interface Tarea {
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1:Tarea = {nombre:"Tarea 1", prioridad:2, estado:EstadoTarea["En proceso"]};

console.log(tarea1);

type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}

let empleado1:Empleado = {nombre:"José", edad:18, sueldo:15000};

console.log(empleado1);

type Jefe = {
    antiguedad:number,
}

let administrativo: Empleado & Jefe;

administrativo = {nombre:"Paco", edad:20, sueldo:50000, antiguedad:4};

console.log(administrativo);

//Operador Terniario
//Condición ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecución` : `La tarea ${tarea1.nombre} aun no se ha entregado`);

if (tarea1.estado == "P") {
    console.log("Opción 1");
}else if (tarea1.estado == "T") {
    console.log("Opción 2");
}else {
    console.log("Opción 3");
}

switch (tarea1.estado) {
    case "P":
        console.log("Pendiente");
        break;
    case "E":
        console.log("En proceso");
        break;
    default:
        console.log("Otro estado o no tiene estado");
        break;
    
    try{
        let numero1:number = 1;

        console.log(numero1.toString);
    }catch (error){
        console.log("Se ha producido un error.");
    }
}