import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    //hello -> Hello
    return value.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    }).join(' ');
  
  }

}
