import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepetir]'
})
export class RepetirDirective {

  @Input()
  set appRepetir(value: number){
    for(let i = 0; i < value; i++){
      this.viewContainerRef.createEmbeddedView(this.tempLateRef);
    }
  }

  constructor(private tempLateRef: TemplateRef<unknown>, private viewContainerRef: ViewContainerRef) { }

}
