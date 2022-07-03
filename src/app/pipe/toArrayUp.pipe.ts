import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toArrayUp'
})

export class ToArrayPipeU implements PipeTransform {
  transform(value: number): any[] {
    return new Array(value);
  }
}