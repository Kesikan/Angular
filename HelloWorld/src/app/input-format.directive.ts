import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})

export class InputFormatDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appInputFormat') format: any;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus1()
  // tslint:disable-next-line:one-line
  {
    console.log('on focus');
  }

  @HostListener('blur') onBlur1()
  // tslint:disable-next-line:one-line
  {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lower')
    // tslint:disable-next-line:one-line
    {
      this.el.nativeElement.value = value.toLowerCase();
    }else if (this.format === 'upper')
    // tslint:disable-next-line:one-line
    {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}


