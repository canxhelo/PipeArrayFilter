import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  category=['Electronics','Furniture','Stationery']
  
  transform(items: any[], condition: string) {
    if (!items || !condition){
      return items;
    }
    if (condition === 'inStock') {
        return items.filter(product => product.inStock === true);
    }
    if(this.category.includes(condition))
    {
      return items.filter(product=>product.category === condition)
    }

    return items.filter(product => product.hasOwnProperty(condition));
}
}
