import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'abbreviate',
  standalone: true,
})
export class AbbreviatePipe implements PipeTransform {
  transform(value: string) {
    const splittedFullName = value.split(' ');
    return `${splittedFullName[0]} ${splittedFullName[1].charAt(0)}`;
  }
}
