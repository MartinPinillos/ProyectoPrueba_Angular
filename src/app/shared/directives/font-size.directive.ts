import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnChanges{

//si quiero añadir distintos tamaños uso el decorador Input
  @Input() appFontSize: number = 50

  //en el constructor inyecto la referencia al elemento , ElementRef es la referencia al elemento Parrafo
  //renderer es un servicio que permite cambiar las propiedades del HTML
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //console.log('HERE', this.elementRef.nativeElement);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '50px');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', `${this.size}px`);
    this.establecerTamano();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.establecerTamano();
  }

  establecerTamano():void{
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', `${this.appFontSize}px`);
  }
}
