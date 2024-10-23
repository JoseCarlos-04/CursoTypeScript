export default class Persona implements Persona {
    private nombre:string;
    apellidos:string;
    readonly dni:string;
    edad?:number;
    // protected direccion:string;

    constructor (nombre:string, apellidos:string, dni:string, edad?:number){
        this.nombre = nombre;
        this.apellidos = apellidos;
        if(edad == undefined){
            this.edad = 0;
        }else{
            this.edad = edad;
        }
        this.dni = dni;
    }
    
    set setNombre(nombre:string){
        this.nombre = nombre;
    }
    
    get getNombre(){
        return this.nombre;
    }

    getJSON():string{
        return JSON.stringify(new Persona(this.nombre, this.apellidos, this.dni, this.edad));
    }
    
    // (json:string) => Persona
    getJSONToObject(json:string):Persona{
        return JSON.parse(json) as Persona;
    }

    toTexto(){
        console.log(`${this.dni} : ${this.nombre} - ${this.apellidos} - ${this.edad}`);
    }
}