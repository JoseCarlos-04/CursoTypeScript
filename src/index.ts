import { trace } from "console";
import { webcrypto } from "crypto";

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

//Tipos de bucles:

let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        prioridad: 2,
        estado: EstadoTarea.Terminado
    },
    {
        nombre: "Tarea 2",
        prioridad: 0,
        estado: EstadoTarea.Pendiente
    },
    {
        nombre: "Tarea 3",
        prioridad: 15,
        estado: EstadoTarea["En proceso"]
    }
];

//Bucle for-each
listaTareasNueva.forEach((tarea: Tarea, index: number) => {console.log(`${index} - ${tarea.nombre}`)});

//Bucle for
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];
    console.log(`${index} - ${tarea.nombre}`);
};

//Bucle while
while (tarea1.estado !== EstadoTarea.Terminado) {
    if (tarea1.prioridad == 5) {
        tarea1.estado = EstadoTarea.Terminado;
    }else {
        tarea1.prioridad++;
    };
};

//Bucle do-while
do {
    tarea1.prioridad++;

    tarea1.estado = EstadoTarea.Terminado;
} while (tarea1.estado !== EstadoTarea.Terminado);


//Asignación múltiple de variables
let miTarea = {
    titulo: "Mi tarea",
    estado: EstadoTarea.Terminado,
    prioridad: 1
};

//Declaración 1 a 1
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miPrioridad = miTarea.prioridad;

//Declaración con factor de propagación
let {titulo, estado, prioridad} = miTarea;

let listaCompraLunes: string[] = ["Leche", "Patatas"];
let listaCompraMartes: string[] = ["Huevos", "Pan"];
let listaCompraSemana: string[] = [...listaCompraLunes, ...listaCompraMartes];

let estadoApp = {
    usuario: "admin",
    session: 3
};

let nuevoEstadoApp = {
    ...estadoApp,
    session: 4
};

//Funciones
/**
 * Función que muestra un saludo por consola
 */
function saludar() {
    let nombre = "Martín";

    console.log(`Hola ${nombre}`);
}

//Invocación de la función
saludar();

/**
 * Función que muestra un saludo a una persona por consola
 * 
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: String) {
    console.log(`Hola ${nombre}`);
}

saludarPersona("José");

/**
 * Función que muestra una despedida a una persona por consola
 * 
 * @param nombre Nombre de la persona a despedir, por defecto será "Pepe"
 */
function despedirPersona(nombre: String = "Pepe") {
    console.log(`Adiós ${nombre}`);
}

despedirPersona();
despedirPersona("Luis");

/**
 * Función que muestra una despedida a una persona por consola
 * 
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre?: String) {
    if (nombre) {
        console.log(`Adiós ${nombre}`);
    } else {
        console.log("Adiós");
    }
}

despedidaOpcional();
despedidaOpcional("Juanjo");

function variosParams (nombre: String, apellido?: String, edad: number = 18) {
    if (apellido) {
        console.log(`${nombre} ${apellido} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}

variosParams("Martín");
variosParams("Martín", "López");
variosParams("Martín", undefined, 30);
variosParams("Martín", "López", 30);
variosParams(nombre = "Martín", apellido = "López"); //No me deja poner la edad

function ejemploVariosTipos(a: String | number) {
    if(typeof(a) === 'string'){
        console.log("A es un String");
    }else if(typeof(a) === 'number'){
        console.log("A es un number");
    }else{
        console.log("A no es String ni number");
        throw Error("A no es String ni number");
    }
}

ejemploVariosTipos("Hola");
ejemploVariosTipos(3);

/**
 * 
 * @param nombre Nombre de la persona
 * @param apellidos Apellidos de la persona
 * @returns Nombre completo de la persona
 */
function ejemploReturn(nombre: String, apellidos: String): String { //Se puede poner más de un posible return poniendo String | number
    return `${nombre} ${apellidos}`
}

const nombreCompleto = ejemploReturn("Martín", "López")

console.log(nombreCompleto)
console.log(ejemploReturn("Martín", "López"))

/**
 * Función que muestra en consola una lista de nombres
 * 
 * @param nombres Es una lista de nombres de String
 */
function ejemploMultiParams(...nombres: String[]): void {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploMultiParams("Martín")
ejemploMultiParams("Martín", "Pepe", "Juan", "Alba")

const lista = ["Alberto", "Sandra"]

ejemploMultiParams(...lista)

function ejemploParamLista(nombres: String[]): void {
    nombres.forEach((nombre) => {
        console.log(nombre)
    })
}

ejemploParamLista(lista)

// ARROW Functions

type Empleado2 = {
    nombre: String
    apellido: String
    edad: number
}

let empleadoMartin: Empleado2 = {
    nombre: "Martín",
    apellido: "López",
    edad: 30
}

const mostrarEmpleado = (empleado: Empleado2): string => `${empleado.nombre} tiene ${empleado.edad} años`

//Llamamos a la función
console.log(mostrarEmpleado(empleadoMartin))

const datosEmpleado = (empleado: Empleado2): string => {
    if(empleado.edad > 70){
        return `Empleado ${empleado.nombre} está en edad de jubilación`
    }else{
        return `Empleado ${empleado.nombre} está en edad laboral`
    }
}

console.log(datosEmpleado(empleadoMartin))

const obtenerSalario = (empleado: Empleado2, cobrar: () => void) => {
    if(empleado.edad > 70){
        return
    }else{
        cobrar()
    }
}

const cobrarEmpleado = (empleado: Empleado2) => {
    console.log(`${empleado.nombre} cobra su salario`)
}

obtenerSalario(empleadoMartin, () => 'Cobrar Martín')


//Async Functions
async function ejemploAsync(): Promise<String>{

    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")

    return `Completado`
}

ejemploAsync().then((respuesta) => {
    console.log("Respuesta", respuesta)
}).catch((error) => {
    console.log("Ha habido un error", error)
}).finally(() => `Todo ha terminado`)


//Generators
function* ejemploGenerator() {

    //Yield --> para emitir valores

    let index = 0;

    while(index < 5){
        //Emitimos un valor incrementado
        yield index++;
    }

}

//Guardamos la función generadora en una variable
let  generadora = ejemploGenerator();

//Accedemos a los valores emitidos
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)


//Worker
function* watcher(valor: number) {
    yield valor; //Emitimos el valor inicial
    
    yield* worker(valor); //Llamamos a las emisiones del worker para que emita otros valores

    yield valor + 4;
}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)
console.log(generatorSaga.next().value)


//Función anónimas

let fItera = function (elemento:Tarea, indice: number) {console.log(`La tarea ${elemento.nombre} se encuentra en la posición ${indice} del array`)}

listaTareasNueva.forEach(fItera)


//Más funciones arrow

let fArrow = (elemento:Tarea, indice: number) => {console.log(`La tarea ${elemento.nombre} se encuentra en la posición ${indice} del array`)}

listaTareasNueva.forEach(fArrow)


// CALLBACK

let fSuma = function suma(a: number, b: number){
    return a + b;
}

let fResta = function resta(a: number, b: number){
    return a - b;
}

function opera(x:number, y:number, funcion:(a:number, b: number) => number){
    return funcion(x, y);
}

opera(1, 2, fSuma)
opera(1, 2, fResta)


// ASYNC FUNCTION

async function asincrona() {
    let suma:number = 0;

    for(let i = 0; i < 1000000000; i++){
        suma += i;
    }

    return suma;
}


asincrona().then((data: number) => {console.log(`El resultado de ejecutar asyc = ${data}`)})

console.log("Línea de código posterior a llamada asíncrona");

async function getDataUniversity() : Promise<JSON []> {
    const data = await fetch ("http://universities.hipolabs.com/search?country=Spain");

    let respuesta: Promise<JSON []> = await data.json() as Promise<JSON []>;

    return respuesta;
}

getDataUniversity().then((data: JSON[]) => {console.log(data[0])})

type University = {
    domains: String[],
    alpha_two_code: String
}

async function getUniversitys() : Promise<University []> {
    const data = await fetch ("http://universities.hipolabs.com/search?country=Spain");

    let respuesta: Promise<University []> = await data.json() as Promise<University []>;

    return respuesta;
}

getUniversitys().then((data:University[]) => {console.log(data[0].domains)})
getUniversitys().then((data:University[]) => {data.forEach((universiad) => {console.log(universiad.domains)})})


// Funcion generadora

function* fGeneradora():Generator<Tarea>{
    for (let tarea in listaTareasNueva) {
        yield listaTareasNueva[tarea]
    }
}

let funcionGen = fGeneradora();

console.log(funcionGen.next());
console.log(funcionGen.next());


// ASYNC GENERADORA

function* fGeneradora2 () : Generator<String>{
    yield "Hola"
    yield "Mundi"
    yield "IES"
}

let llamadafgen2 = fGeneradora2();

console.log(llamadafgen2.next());
console.log(llamadafgen2.next());
console.log(llamadafgen2.next());

type WebPage = {
    Name:String,
    Domain:String,
    Description:String
}

async function* obtenerDatosWeb() : AsyncGenerator<WebPage>{
    let peticion = await fetch("https://haveibeenpwned.com/api/v2/breaches");

    let datos:WebPage[] = await peticion.json() as WebPage[];

    for(let i = 0; i < datos.length; i++){
        yield datos[i];
    }

    /*for(let index in datos){
        yield datos[index];
    }*/
}

let datosWebPage = obtenerDatosWeb();

datosWebPage.next().then(({value, done}) => {console.log(`${value.Name} - ${value.Description}`)});
datosWebPage.next().then(({value, done}) => {console.log(`${value.Name} - ${value.Description}`)});


// SOBRECARGA DE FUNCIONES

function saludarSobrecarga(nombre:String) : String;
function saludarSobrecarga(nombre:String, apellido:String) : String;
function saludarSobrecarga(nombre:String, apellido:String, edad:String) : String;
function saludarSobrecarga(nombre:String, apellido:String, edad:number) : String;

function saludarSobrecarga(nombre:String, apellido?:String, edad?:String|number) : String {
    let saludo = `Hola ${nombre}`

    if (apellido != undefined){
        saludo += ` ${apellido}`
    }

    if (edad != undefined){
        saludo += ` ${edad}`
    }

    return saludo;
}

console.log(saludarSobrecarga("José Carlos"));
console.log(saludarSobrecarga("José Carlos", "Parrilla Romero"));
console.log(saludarSobrecarga("José Carlos", "Parrilla Romero", "20"));
console.log(saludarSobrecarga("José Carlos", "Parrilla Romero", 20));


// ACTIVIDAD 1.1
// Ejercicio 2
function almacenaTarea(type:string = "SessionStorage", key:string, data:Tarea[]){
    if(type == "session"){
        sessionStorage.setItem(key, JSON.stringify(data));
    }else if(type == "local"){
        localStorage.setItem(key, JSON.stringify(data));
    }
}

// Ejercicio 3
almacenaTarea("session", "datos", listaTareasNueva);
almacenaTarea("local", "datos", listaTareasNueva);

// Ejercicio 4
function recuperaInfo(type:string = "session", key:string):string{
    let dato:string|null;

    if(type == "session"){
        dato = sessionStorage.getItem(key);
    }else if(type == "local"){
        dato = localStorage.getItem(key);
    }else{
        dato = null;
    }

    if(dato != null){
        return dato;
    }else{
        return "";
    }
}

// Ejercicio 5
let listaTareaObtenida:Tarea[] = JSON.parse(recuperaInfo("session", "datos"));
console.log(listaTareaObtenida);

let listaTareaObtenida2:Tarea[] = JSON.parse(recuperaInfo("local", "datos"));
console.log(listaTareaObtenida2);

// Ejercicio 6
function borraInfoAlmacenada(type:string = "session", key:string){
    if(type == "session"){
        sessionStorage.removeItem(key);
    }else if(type == "local"){
        localStorage.removeItem(key);
    }
}

borraInfoAlmacenada("session", "datos");
borraInfoAlmacenada("local", "datos");

// Ejercicio 7
import Cookies from "js-cookie";

Cookies.set("nombre", "José Carlos", {expires:7, path:"/"});
Cookies.set("apellido", "Parrilla Romero", {expires:2});
Cookies.set("email", "jparrom736@iescarrillo.es", {expires:4});

console.log(Cookies.get("nombre"));
console.log(Cookies.get("apellido"));
console.log(Cookies.get("email"));

Cookies.remove("nombre");
Cookies.remove("apellido");
Cookies.remove("email");


// ACCEDEMOS A LOS ELEMENTOS DEL DOM

let inputElement = document.getElementById("input-contenido") as HTMLInputElement;
let btnNuevoContenido = document.getElementsByName("btn-add-content")[0] as HTMLButtonElement;
let div = document.getElementsByTagName("div") as HTMLCollectionOf<HTMLDivElement>;

console.log(`Valor del input: ${inputElement.value}`);
console.log(btnNuevoContenido);
console.log(div);

let elementoOl = document.querySelector("lista-contenidos") as HTMLOListElement;
let elementosLi = document.getElementById("lista-contenidos")?.getElementsByTagName("li");
let elementosLi2 = document.querySelectorAll("ol[id='lista-contenidos'] > li");

console.log(elementosLi);
console.log(elementosLi2);

// CREACIÓN DE ELEMENTOS

let nuevoElemento:HTMLLIElement = document.createElement("li");
nuevoElemento.innerText = "Nuevo Elemento";

btnNuevoContenido.addEventListener("click", (event) => {
    // TODO:
    console.log("Usuario hace clic en el botón")
});

/*
Distintos tipos de eventos

click
dblclick
keydown
keyup
load
mousedown
mousemove
mouseout
mouseover
mouseup
*/

function ejecutarAlgo(event:Event){
    if(event.type == "click"){
        console.log("Has hecho un click");
    }else if(event.type == "dblclick"){
        console.log("Has hecho un doble click");
    }else{
        console.log("Has hecho un evento distinto a click");
    }
}

// Se puede añadir una función como evento
btnNuevoContenido.addEventListener("click", ejecutarAlgo);
btnNuevoContenido.addEventListener("dblclick", ejecutarAlgo);

// Elimina el evento introducido
btnNuevoContenido.removeEventListener("mouseout", ejecutarAlgo);


// Recorrer elementos hijos
let elementoOL:HTMLOListElement = document.getElementById("lista-contenidos") as HTMLOListElement;

let primerElemento:HTMLLIElement = elementoOL.children[0] as HTMLLIElement;

console.log(primerElemento.innerText);

function comprobarCoincidencia(input:string):boolean{
    let elementoOl:HTMLOListElement = document.getElementById("lista-contenidos") as HTMLOListElement;

    let listaLi:HTMLCollection = elementoOl.children;

    for (let i = 0; i < listaLi.length; i++) {
        if(listaLi[i].textContent == input){
            return true;
        }
    }

    return false;
}

btnNuevoContenido.addEventListener("click", (event) => {
    if(inputElement.value != "" && inputElement.value != null){
        if(!comprobarCoincidencia(inputElement.value)){
            let elementoOl = document.getElementById("lista-contenidos") as HTMLOListElement;

            let nuevoLi:HTMLLIElement = document.createElement("li");
            nuevoLi.innerText = inputElement.value;

            elementoOl.appendChild(nuevoLi);
        }
    }
})

let btnEliminarContenido = document.getElementsByName("btn-del-content")[0] as HTMLButtonElement;

btnEliminarContenido.addEventListener("click", (event) => {
    if(inputElement.value != "" && inputElement.value != null){
        if(comprobarCoincidencia(inputElement.value)){
            let elementoOl = document.getElementById("lista-contenidos") as HTMLOListElement;

            let listaLi:HTMLCollection = elementoOl.children;

            for (let i = 0; i < listaLi.length; i++) {
                if(listaLi[i].textContent == inputElement.value){
                    listaLi[i].remove();
                }
            }
        }
    }
})

// https://dog.ceo/api/breeds/image/random