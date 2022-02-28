import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appInputForamt]'
})
export class InputForamtDirective {
  
  constructor(private el: ElementRef)
  {

  }

  @HostListener('focus') onFocus()
  {
    console.log("on focus");
  }
  @HostListener('blur') onBlur()
  {
    console.log("on Blur");
    let value:string=this.el.nativeElement.value;
    this.el.nativeElement.value=value.toLowerCase();
  }


}
