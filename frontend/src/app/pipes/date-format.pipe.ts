import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | Date, format: string = 'MMM d, y'): string | null {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, format);
  }

}
