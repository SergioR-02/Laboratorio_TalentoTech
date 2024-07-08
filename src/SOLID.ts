
//principio de segregación de interfaces 
interface IEmpleado {
  getNombre(): string;
}
//clase Empleado
abstract class Empleado implements IEmpleado{
  private nombre:string;
  private edad:number;
  private id:number;

  constructor(nombre:string,edad:number,id:number){
    this.nombre= nombre;
    this.edad = edad;
    this.id =id;
  }

  getNombre():string{
    return this.nombre
  }

  getEdad(): number {
    return this.edad;
  }

  getId():number{
    return this.id;
  }
}


//principio de responsabilidad única 
class CalcularSalario{
  static calculoSalario(empleado: IEmpleado): number|null {
    if (empleado instanceof EmpleadoTiempoCompleto) {
      return (
        empleado.getSalarioBase() +
        empleado.getComisiones() +
        empleado.getSubsidioTransporte() -
        (empleado.getLlegadasTarde() * 9000)
      );
    } else if (empleado instanceof EmpleadoMedioTiempo){
      return (empleado.getHorasTrabajadas() * empleado.getTarifaHora());
    }else{
      return null
    }
  }
}

//inversión de dependencia 
interface IGenerarReporte {
  generarReporte(empleado: IEmpleado): string | null;
}
//principio de responsabilidad única 
class GenerarReporte implements IGenerarReporte{
  generarReporte(empleado: IEmpleado): string|null {
    if (empleado instanceof EmpleadoTiempoCompleto) {
      return (`Empleado tiempo completo:
        Nombre: ${empleado.getNombre()}
        Edad: ${empleado.getEdad()}
        ID: ${empleado.getId()}
        Salario Total: ${CalcularSalario.calculoSalario(empleado)}\n`);
    } else if (empleado instanceof EmpleadoMedioTiempo){
      return (`Empleado Medio tiempo:
        Nombre: ${empleado.getNombre()}
        Edad: ${empleado.getEdad()}
        ID: ${empleado.getId()}
        Salario Total: ${CalcularSalario.calculoSalario(empleado)}\n`);
    }else{
      return null
    }
  }
}

//principio de segregación de interfaces 
interface IEmpleadoTiempoCompleto{
  descanso():void;
}
//Aplica el principio abierto/cerrado y principio de sustitución de Liskov 
class EmpleadoTiempoCompleto extends Empleado implements IEmpleadoTiempoCompleto{
  private salarioBase:number;
  private comisiones:number;
  private subsidioTransporte:number;
  private llegadasTarde:number;

  constructor(nombre:string,edad:number,id:number,salarioBase:number,comisiones:number,llegadasTarde:number){
    super(nombre,edad,id)
    this.salarioBase=salarioBase;
    this.comisiones=comisiones;
    this.subsidioTransporte = 162.000;
    this.llegadasTarde=llegadasTarde
  }

  getSalarioBase():number{
    return this.salarioBase
  }

  getComisiones():number{
    return this.comisiones
  }

  getSubsidioTransporte():number{
    return this.subsidioTransporte;
  }

  getLlegadasTarde():number{
    return this.llegadasTarde;
  }

  descanso(): void {
    console.log('Descanso');
  }
}

//principio de segregación de interfaces
interface IEmpleadoMedioTiempo{
  getTarifaHora():number;
}
//Aplica el principio abierto/cerrado y principio de sustitución de Liskov 
class EmpleadoMedioTiempo extends Empleado implements IEmpleadoMedioTiempo{
  private tarifaHora: number;
  private horasTrabajadas: number;

  constructor(nombre: string, edad: number,id:number, tarifaPorHora: number, horasTrabajadas: number) {
    super(nombre, edad,id);
    this.tarifaHora = tarifaPorHora;
    this.horasTrabajadas = horasTrabajadas;
  }

  getTarifaHora():number{
    return this.tarifaHora;
  }

  getHorasTrabajadas():number{
    return this.horasTrabajadas;
  }
}

//Inyección de Dependencias
class AdministradorEmpleado {
  private reporteService: IGenerarReporte;
  
  constructor(reporteService: IGenerarReporte) {
    this.reporteService = reporteService;
  }
  
  procesarEmpleado(empleado: IEmpleado): void {
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







