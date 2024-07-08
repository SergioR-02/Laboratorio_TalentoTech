"use strict";
class Empleado {
    constructor(nombre, edad, id) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getId() {
        return this.id;
    }
}
class CalcularSalario {
    static calculoSalario(empleado) {
        if (empleado instanceof EmpleadoTiempoCompleto) {
            return (empleado.getSalarioBase() +
                empleado.getComisiones() +
                empleado.getSubsidioTransporte() -
                (empleado.getLlegadasTarde() * 9000));
        }
        else if (empleado instanceof EmpleadoMedioTiempo) {
            return (empleado.getHorasTrabajadas() * empleado.getTarifaHora());
        }
        else {
            return null;
        }
    }
}
class GenerarReporte {
    generarReporte(empleado) {
        if (empleado instanceof EmpleadoTiempoCompleto) {
            return (`Empleado tiempo completo:
        Nombre: ${empleado.getNombre()}
        Edad: ${empleado.getEdad()}
        ID: ${empleado.getId()}
        Salario Total: ${CalcularSalario.calculoSalario(empleado)}\n`);
        }
        else if (empleado instanceof EmpleadoMedioTiempo) {
            return (`Empleado Medio tiempo:
        Nombre: ${empleado.getNombre()}
        Edad: ${empleado.getEdad()}
        ID: ${empleado.getId()}
        Salario Total: ${CalcularSalario.calculoSalario(empleado)}\n`);
        }
        else {
            return null;
        }
    }
}
class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, edad, id, salarioBase, comisiones, llegadasTarde) {
        super(nombre, edad, id);
        this.salarioBase = salarioBase;
        this.comisiones = comisiones;
        this.subsidioTransporte = 162.000;
        this.llegadasTarde = llegadasTarde;
    }
    getSalarioBase() {
        return this.salarioBase;
    }
    getComisiones() {
        return this.comisiones;
    }
    getSubsidioTransporte() {
        return this.subsidioTransporte;
    }
    getLlegadasTarde() {
        return this.llegadasTarde;
    }
    descanso() {
        console.log('Descanso');
    }
}
class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, edad, id, tarifaPorHora, horasTrabajadas) {
        super(nombre, edad, id);
        this.tarifaHora = tarifaPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }
    getTarifaHora() {
        return this.tarifaHora;
    }
    getHorasTrabajadas() {
        return this.horasTrabajadas;
    }
}
class AdministradorEmpleado {
    constructor(reporteService) {
        this.reporteService = reporteService;
    }
    procesarEmpleado(empleado) {
        const reporte = this.reporteService.generarReporte(empleado);
        console.log(reporte);
    }
}
const empleado1 = new EmpleadoTiempoCompleto('Juan', 30, 1, 1000000, 500000, 2);
const empleado2 = new EmpleadoMedioTiempo('Pedro', 25, 2, 20000, 20);
const generadorReporte = new GenerarReporte();
const administradorEmpleado = new AdministradorEmpleado(generadorReporte);
administradorEmpleado.procesarEmpleado(empleado1);
administradorEmpleado.procesarEmpleado(empleado2);
