// pad-number.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padNumber',
  standalone: true
})
export class PadNumberPipe implements PipeTransform {
  transform(value: number): string {
    let [integer, decimal] = value.toString().split('.');
    integer = integer.padStart(2, '0');
    decimal = (decimal || '0').padEnd(1, '0');
    return `${integer}.${decimal}`;
  }
}
