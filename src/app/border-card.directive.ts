import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el :ElementRef) { 
    this.setHeight (180);
    this.setBorder ('#d473d4');
  }

  @HostListener('mousenter') onMouseenter () {
    this.setBorder ('#009688');
  }

  @HostListener ('mouseleave') onMouseleave () {

    this.setBorder ('#d473d4');
    
  }

 private setHeight (height : number) {
  this.el.nativeElement.style.height = height + 'px';
 }

 private setBorder ( color : string) {
  let border = 'solid 4 px + color'

  this.el.nativeElement.style.border = border;
 }
}
