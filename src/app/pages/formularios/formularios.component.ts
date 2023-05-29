import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {
  //min y maxlength valida que cuantos caracteres tiene que tener
  nombreControl = new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]
    ); //el campo siempre va a ser requerido

    emailControl = new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(10),
        Validators.email
      ]
    );
  formularioRegistro = new FormGroup({
    nombre: this.nombreControl,
    email: this.emailControl
  });
}
