import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'daysAfter',
  standalone: true,
})
export class DaysAfterPipe implements PipeTransform {
  transform(value: number) {
    return Math.ceil((Date.now() - value) / (24 * 60 * 60 * 1000));
  }
}
