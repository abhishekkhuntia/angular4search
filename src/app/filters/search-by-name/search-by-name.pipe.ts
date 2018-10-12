import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(items: any[], filterText: string): any {
    if(!items){
      return [];
    } else if(!filterText){
      return items;
    } else{
      return items.filter(item => (item.name && (item.name.indexOf(filterText)!= -1)));
    }
  }

}
