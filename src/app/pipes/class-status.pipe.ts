import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classStatus'
})
export class ClassStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
