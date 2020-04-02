import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(){
    // this.elem.nativeElement.style.backgroundColor='yellow';
  }

}
