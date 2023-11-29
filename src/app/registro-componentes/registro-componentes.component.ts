import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-componentes',
  templateUrl: './registro-componentes.component.html',
  styleUrls: ['./registro-componentes.component.css'],
})
export class RegistroComponentesComponent {
  paciente = {
    codigoP: 0,
    nombre: '',
    paterno: '',
    materno: '',
    tutor: '',
    edad: 0,
    areaInternada: '',
    fechaIngreso: '',
  };
  datosPacientes = [
    {
      codigoP: 1,
      nombre: 'luis',
      paterno: 'alvarez',
      materno: 'portugal',
      tutor: 'Jose alvarez',
      edad: 13,
      areaInternada: 'psicologia',
      fechaIngreso: '12/05/23',
    },
    {
      codigoP: 2,
      nombre: 'andres',
      paterno: 'luna',
      materno: 'bernas',
      tutor: 'mario luna',
      edad: 11,
      areaInternada: 'medicina',
      fechaIngreso: '13/04/23',
    },
    {
      codigoP: 3,
      nombre: 'alejandro',
      paterno: 'patty',
      materno: 'machaca',
      tutor: 'samuel patty',
      edad: 14,
      areaInternada: 'nutricion',
      fechaIngreso: '1/08/23',
    },
    {
      codigoP: 4,
      nombre: 'marcela',
      paterno: 'medrano',
      materno: 'calle',
      tutor: 'enrique medrano',
      edad: 10,
      areaInternada: 'medicina',
      fechaIngreso: '11/06/23',
    },
    {
      codigoP: 5,
      nombre: 'javier',
      paterno: 'gozueta',
      materno: 'cruz',
      tutor: 'mijael gozueta',
      edad: 12,
      areaInternada: 'pscicologia',
      fechaIngreso: '23/05/23',
    },
    {
      codigoP: 6,
      nombre: 'monica',
      paterno: 'lopez',
      materno: 'carrisales',
      tutor: 'mayerli carrisales',
      edad: 11,
      areaInternada: 'psicomotricidad',
      fechaIngreso: '30/07/23',
    },
    {
      codigoP: 7,
      nombre: 'raul',
      paterno: 'marquez',
      materno: 'perez',
      tutor: 'henry perez',
      edad: 15,
      areaInternada: 'psicologia',
      fechaIngreso: '12/12/23',
    },
  ];
  hayRegistros() {
    return this.datosPacientes.length > 0;
  }
  seleccionar(paciente: {
    codigoP: number;
    nombre: string;
    paterno: string;
    materno: string;
    tutor: string;
    edad: number;
    areaInternada: string;
    fechaIngreso: string;
  }) {
    this.paciente.codigoP = paciente.codigoP;
    this.paciente.nombre = paciente.nombre;
    this.paciente.paterno = paciente.paterno;
    this.paciente.materno = paciente.materno;
    this.paciente.tutor = paciente.tutor;
    this.paciente.edad = paciente.edad;
    this.paciente.areaInternada = paciente.areaInternada;
    this.paciente.fechaIngreso = paciente.fechaIngreso;
  }
  borrar(codigoP: number) {
    for (let i = 0; i < this.datosPacientes.length; i++) {
      if (this.datosPacientes[i].codigoP == codigoP) {
        this.datosPacientes.splice(i,1);
        return;
      }
    }
    return;
  }
  agregar(){
    if(this.paciente.codigoP<=0)
      {
        alert("codigo de paciente invalido");
        return;
      }
      for (let i = 0; i < this.datosPacientes.length; i++) {
        if(this.datosPacientes[i].codigoP==this.paciente.codigoP){
          alert("Ya existe el codigo de paciente");
        }
      }
      this.datosPacientes.push(
        {
          codigoP: this.paciente.codigoP,
          nombre: this.paciente.nombre,
          paterno: this.paciente.paterno,
          materno: this.paciente.materno,
          tutor: this.paciente.tutor,
          edad: this.paciente.edad,
          areaInternada: this.paciente.areaInternada,
          fechaIngreso: this.paciente.fechaIngreso
        }
      );
      this.paciente.codigoP=0;
      this.paciente.nombre="";
      this.paciente.paterno="";
      this.paciente.materno="";
      this.paciente.tutor="";
      this.paciente.edad=0;
      this.paciente.areaInternada="";
      this.paciente.fechaIngreso="";


  }
  modificar() {
    for(let x=0;x<this.datosPacientes.length;x++){
      if (this.datosPacientes[x].codigoP == this.paciente.codigoP)
      {
        this.datosPacientes[x].codigoP=this.paciente.codigoP;
        this.datosPacientes[x].nombre=this.paciente.nombre;
        this.datosPacientes[x].paterno=this.paciente.paterno;
        this.datosPacientes[x].materno=this.paciente.materno;
        this.datosPacientes[x].tutor=this.paciente.tutor;
        this.datosPacientes[x].edad=this.paciente.edad;
        this.datosPacientes[x].areaInternada=this.paciente.areaInternada;
        this.datosPacientes[x].fechaIngreso=this.paciente.fechaIngreso;
        return;
      }
    }
    alert('No existe el código de ar􀆟culo ingresado');
  }
}
