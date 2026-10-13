import { Directive } from '@angular/core';
@Directive({ selector: '[appHighlight]', standalone: false,
  host: { '[style.backgroundColor]': "'lightyellow'", '[style.padding]': "'12px'" } })
export class HighlightDirective {}
