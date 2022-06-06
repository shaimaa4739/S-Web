import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {

  @Input() lightBoxColor:string='#FFFFFF';
  @Input() lightBoxhover:string='red';
  constructor(public elementRef:ElementRef) {
    this.elementRef.nativeElement.style.border=`2px solid ${this.lightBoxColor}`;
  }
  @HostListener('mouseenter') onMouseEnter()
  {
    this.elementRef.nativeElement.style.border=`2px solid ${this.lightBoxhover}`;
  }
  @HostListener('mouseout') onMouseLeave()
  {
    this.elementRef.nativeElement.style.border=`2px solid ${this.lightBoxColor}`;
  }

}
