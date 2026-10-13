import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'titleCase', standalone: false })
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.trim().replace(/\S+/g, word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
}
