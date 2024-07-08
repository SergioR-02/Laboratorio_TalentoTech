"use strict";
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
}
class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    hablar() {
        return "Guau";
    }
    moverse() {
        return "El perro está corriendo";
    }
}
class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    hablar() {
        return "Miau";
    }
    moverse() {
        return "El gato está caminando sigilosamente";
    }
}
const gatoValentin = new Gato('Valentin', 3);
const perroTobias = new Perro('Tobias', 8);
const parrafoPerro = document.getElementById('perro');
if (parrafoPerro) {
    parrafoPerro.textContent = `${perroTobias.moverse()}, su nombre es ${perroTobias.getNombre()} y habla "${perroTobias.hablar()}" `;
}
else {
    console.error('Elemento con id "perro" no encontrado.');
}
const parrafoGato = document.getElementById('gato');
if (parrafoGato) {
    parrafoGato.textContent = `${gatoValentin.moverse()}, su nombre es ${gatoValentin.getNombre()} y habla "${gatoValentin.hablar()}" `;
}
else {
    console.error('Elemento con id "perro" no encontrado.');
}
