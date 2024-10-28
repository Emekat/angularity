import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  /**
   * @description
   * The constructor of the CopyrightDirective class.
   * It automatically updates the year in the copyright notice.
   * @param el The ElementRef object.
   */
  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = el.nativeElement;
    targetEl.classList.add('copyright');
    targetEl.textContent = `Copyright ©${currentYear} All Rights Reserved.`;
  }

}
