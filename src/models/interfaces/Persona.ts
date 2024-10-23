interface Persona{
    nombre:string;
    apellidos:string;
    dni:string;
    edad?:number;

    setNombre:(nombre:string) => void;

    getNombre:() => string;

    getJSON:() => JSON;
}