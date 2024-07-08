
//Interfaz Herramienta
interface Herramienta {
  utilizar(): void;
  reparar(): void;
  getDetalles(): string;
}

//Producto o clases Concretas 
class Pica implements Herramienta {
  private material: string;
  private longitud: number;
  private peso: number;

  constructor(material: string, longitud: number, peso: number) {
    this.material = material;
    this.longitud = longitud;
    this.peso = peso;
  }

  utilizar(): void {
    console.log('Usando la pica');
  }


  reparar(): void {
    console.log('Reparando la pica');
  }

  getDetalles(): string {
    return `Pica de material ${this.material}, longitud de ${this.longitud}Cm y peso ${this.longitud}Kg`;
  }
}

class Pala implements Herramienta {
  private material: string;
  private longitud: number;
  private peso: number;

  constructor(material: string, longitud: number, peso: number) {
    this.material = material;
    this.longitud = longitud;
    this.peso = peso;
  }

  utilizar(): void {
    console.log('Usando la pala');
  }

  reparar(): void {
    console.log('Reparando la pala');
  }

  getDetalles(): string {
    return `Pala de material: ${this.material},longitud de ${this.longitud}Cm y peso ${this.longitud}Kg`;
  }
}

//Factory
class Fatory {
  crearHerramienta(tipo: string, material: string, longitud:number,peso: number): Herramienta {
    if (tipo === 'Pica') {
      return new Pica(material,longitud ,peso);
    }
    if (tipo === 'Pala') {
      return new Pala(material, longitud,peso);
    } 
      
    throw new Error('No esta disponicle el tipo de herramienta');
  }
}

//Instancias
const factory = new Fatory();
const pica = factory.crearHerramienta('Pica', 'Hierro', 100, 5);
const pala = factory.crearHerramienta('Pala', 'Madera', 50, 3);

console.log(pica.getDetalles());
pica.utilizar();
pica.reparar();

console.log(pala.getDetalles());
pala.reparar();
pala.utilizar();

