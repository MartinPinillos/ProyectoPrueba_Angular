import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

//para trabajar con formularios se necesitan estos dos import:
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    FormulariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  exports:[
    FormulariosComponent
  ]
})
export class FormulariosModule { 
  
}
