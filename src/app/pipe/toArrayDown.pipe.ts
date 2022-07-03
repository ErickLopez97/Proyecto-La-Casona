import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toArrayDown'
})

export class ToArrayPipeD implements PipeTransform {
  transform(value: number): any[] {
    return new Array(5-value);
  }
}