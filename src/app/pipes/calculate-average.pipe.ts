import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAverage',
})
export class CalculateAveragePipe implements PipeTransform {
  transform(average: number, val1: number, val2: number, val3: number): number {
    return (val1 + val2 + val3) / 3;
  }
}
