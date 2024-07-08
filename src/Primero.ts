abstract class Animal{
  private nombre:string;
  private edad:number;
  constructor(nombre: string, edad: number ){
    this.nombre= nombre;
    this.edad = edad;
  }

  abstract hablar():void;
  abstract moverse():void;
  getNombre(): string{
    return this.nombre
  }
}

class Perro extends Animal{
  constructor(nombre:string, edad: number){
    super(nombre,edad);
  }
  override hablar():string{
    return "Guau"
  }

  override moverse():string{
    return "El perro está corriendo" 
  }
}

class Gato extends Animal{
  constructor(nombre:string, edad: number){
    super(nombre,edad);
  }
  override hablar():string{
    return "Miau"
  }

  override moverse():string{
    return "El gato está caminando sigilosamente"
  }
}

//Instanciar clase
const gatoValentin = new Gato('Valentin',3)
const perroTobias = new Perro ('Tobias', 8)


const parrafoPerro = document.getElementById('perro');
if (parrafoPerro) {
  parrafoPerro.textContent = `${perroTobias.moverse()}, su nombre es ${perroTobias.getNombre()} y habla "${perroTobias.hablar()}" `;
} else {
  console.error('Elemento con id "perro" no encontrado.');
}

const parrafoGato = document.getElementById('gato');
if (parrafoGato) {
  parrafoGato.textContent = `${gatoValentin.moverse()}, su nombre es ${gatoValentin.getNombre()} y habla "${gatoValentin.hablar()}" `;
} else {
  console.error('Elemento con id "perro" no encontrado.');
}