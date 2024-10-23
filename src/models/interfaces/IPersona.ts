import Persona from "../Persona";

export interface IPersona{
    nombre:string;
    apellidos:string;
    dni:string;
    edad?:number;

    getJSON: () => JSON;
    getJSONToObject: (json:string) => Persona
}