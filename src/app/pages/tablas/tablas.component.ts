import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';

//declaro una interface con los atributos del estudiante
export interface Estudiante{
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
  displayedColumns: string[] = ['id', 'nombreCompleto', 'fecha_registro'];

  aplicarFiltro(ev: Event) : void{
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog){
    
  }

  abrirABMAlumnos(): void{
    const dialog = this.matDialog.open(AbmAlumnosComponent);

    //dialog.afterClosed().subscribe((valor) => console.log(valor))
    dialog.afterClosed().subscribe((valor) => {
      if(valor){
        this.dataSource.data = [
          ...this.dataSource.data, 
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }
}
