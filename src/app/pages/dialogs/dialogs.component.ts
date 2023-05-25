import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogComponent } from './mis-dialogs/usuarios-dialog/usuarios-dialog.component';
import { ComidasDialogComponent } from './mis-dialogs/comidas-dialog/comidas-dialog.component';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  //para poder abrir un dialogo tengo que inyectarel servicio de angular materila , 
  //declarando un constructor donde recibiria esa inyeccion

  constructor(
    private dialogService: MatDialog
  ){}

  abrirDialogDeUsuarios(): void{
   const dialogo =  this.dialogService.open(UsuariosDialogComponent, {
      data:{
        usuario:{
          nombre: 'Martin',
          apellido:'Pinillos',
        }
      }
    });

    dialogo.afterClosed()
    .subscribe(console.log)
  }
  abrirDialogDeComidas(): void{
    this.dialogService.open(ComidasDialogComponent);
  }
}
