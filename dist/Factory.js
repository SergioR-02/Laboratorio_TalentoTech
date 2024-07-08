"use strict";
class Pica {
    constructor(material, longitud, peso) {
        this.material = material;
        this.longitud = longitud;
        this.peso = peso;
    }
    utilizar() {
        console.log('Usando la pica');
    }
    reparar() {
        console.log('Reparando la pica');
    }
    getDetalles() {
        return `Pica de material ${this.material}, longitud de ${this.longitud}Cm y peso ${this.longitud}Kg`;
    }
}
class Pala {
    constructor(material, longitud, peso) {
        this.material = material;
        this.longitud = longitud;
        this.peso = peso;
    }
    utilizar() {
        console.log('Usando la pala');
    }
    reparar() {
        console.log('Reparando la pala');
    }
    getDetalles() {
        return `Pala de material: ${this.material},longitud de ${this.longitud}Cm y peso ${this.longitud}Kg`;
    }
}
class Fatory {
    crearHerramienta(tipo, material, longitud, peso) {
        if (tipo === 'Pica') {
            return new Pica(material, longitud, peso);
        }
        if (tipo === 'Pala') {
            return new Pala(material, longitud, peso);
        }
        throw new Error('No esta disponicle el tipo de herramienta');
    }
}
const factory = new Fatory();
const pica = factory.crearHerramienta('Pica', 'Hierro', 100, 5);
const pala = factory.crearHerramienta('Pala', 'Madera', 50, 3);
console.log(pica.getDetalles());
pica.utilizar();
pica.reparar();
console.log(pala.getDetalles());
pala.reparar();
pala.utilizar();
