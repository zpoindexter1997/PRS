import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(bool: boolean): string {
    return bool ? "YES" : "NO";
  }

}
