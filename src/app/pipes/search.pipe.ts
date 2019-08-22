import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Data: any, term: string): any {
    if (term == undefined) {
      return Data;
    } else {
      return Data.filter(function (Data) {
        return Data.city.toLowerCase().includes(term.toLowerCase());

      })
  }
  }

}
