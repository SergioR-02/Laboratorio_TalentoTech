class Persona{
  nombre:string;
  edad:number;
  constructor(nombre:string,edad:number){
    this.nombre=nombre;
    this.edad=edad;
  }

  presentarse():void{
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años de edad`)
  }

  conversar(otraPersona: Persona): void {
    console.log(`${this.nombre}: Mucho gusto ${otraPersona.nombre}, ¿cómo estás?`);
    otraPersona.responder(this);
  }

  responder(otraPersona: Persona): void {
    console.log(`${this.nombre}: Encantado en conocerte ${otraPersona.nombre}, estoy bien. ¿Y tú?`);  
  }
}

const persona1 = new Persona("Andres Perez",23);
const persona2 = new Persona("Marcela Gutierrez", 32);

persona1.presentarse()
persona2.presentarse()
persona1.conversar(persona2)