"use strict";
class Vehiculos {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    detalles() {
        return `Auto de marca: ${this.marca} \nModelo: ${this.modelo} \nAño ${this.año}\n`;
    }
}
const carro1 = new Vehiculos("Audi", "R8 turbo", 2020);
const carro2 = new Vehiculos("Mercedes", "Clase A Sedan", 2021);
console.log(`${carro1.detalles()}\n${carro2.detalles()}`);
