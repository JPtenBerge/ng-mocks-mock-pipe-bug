import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'bla' })
export class BlaPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return `hi there ${value}`;
  }
}
