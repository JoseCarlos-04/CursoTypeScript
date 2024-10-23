import Persona from "./Persona";

export default class Empleadoo extends Persona{
    salario:number;

    constructor (nombre:string, apellidos:string, dni:string, salario:number, edad?:number){
        super(nombre, apellidos, dni, edad);
        
        this.salario = salario;
    }

    toTexto():void{
        super.toTexto();
        console.log(`${this.salario}`)
    }
}