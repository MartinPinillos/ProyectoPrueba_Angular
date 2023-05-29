import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorMessages'
})
export class ControlErrorMessagesPipe implements PipeTransform {

  transform(error: any, ...args: unknown[]): unknown {
    //si error es null retorna string vacio
    if(!error) return '';

    let defaultMsg = 'Error desconocido';
    //uso una especie de switch para mostrar mensaje 
    const opciones: Record<string , string> = {
      required: 'Este campo es requerido',
      minlength: `Este campo debe tener al menos ${error.value.requiredLength} caracteres`,
      email: 'El valor debe ser un e-mail valido',
      maxlenght: `Este campo debe tener hasta 10 caracteres`
    }
    if(opciones[error.key]){
      defaultMsg = opciones[error.key];
    }
    return defaultMsg;
  }

}
