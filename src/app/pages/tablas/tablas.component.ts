import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

//declaro una interface con los atributos del estudiante
interface Estudiante{
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;
}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {
  //defino el data source que es un Array
  //hardcodeo estudiantes en el array
  estudiantes: Estudiante[] = [
    {
      id:1,
      nombre:'Juan',
      apellido:'Paez',
      fecha_registro: new Date()
    },
    {
      id:2,
      nombre:'Miriam',
      apellido:'Sosa',
      fecha_registro: new Date()
    },
    {
      id:3,
      nombre:'Maria',
      apellido:'Perez',
      fecha_registro: new Date()
    }
  ];

  dataSource = new MatTableDataSource(this.estudiantes);
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'fecha_registro'];

  aplicarFiltro(ev: Event) : void{
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }
}
