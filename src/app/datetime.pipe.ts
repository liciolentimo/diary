import { Pipe, PipeTransform } from '@angular/core';
import { Diary } from './diary';


@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: any): string {
    let today:Date = new Date(); //get current date and time
    return value;
  }

}
