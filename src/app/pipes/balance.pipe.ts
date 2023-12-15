import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'balance',
  standalone: true,
})
export class BalancePipe implements PipeTransform {
  transform(value: string | null) {
    if (value === null) {
      return '';
    }
    const splittedDollarSign = value.split('.')[0].split('$');

    if (!splittedDollarSign[0]) {
      return splittedDollarSign.join('+ $');
    }
    return value.split('.')[0].split('$').join(' $');
  }
}
