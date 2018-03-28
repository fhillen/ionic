import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DateConversionPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'dateConversion',
})
export class DateConversionPipe implements PipeTransform {
  date: any;
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, ...args) {
    this.date = new Date(value);
    return this.date.toString('dd.MM.yyyy');
  }
}
