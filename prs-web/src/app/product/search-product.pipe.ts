import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(product: Product[], searchCriteria: string): Product[] {
    if(product == null || searchCriteria.length == 0){
      return product;
    }
    let search = searchCriteria.toLowerCase();
    let selectedProducts: Product[] = [];
    for(let p of product){
      if(p.id.toString().includes(search)
    || p.name.toLowerCase().includes(search)
    || p.partNbr.toString().toLowerCase().includes(search)
    || p.price.toString().toLowerCase().includes(search)
    || p.vendorId.toString().toLowerCase().includes(search)
    ){
      selectedProducts.push(p);
      }
    }
    return selectedProducts;
  }


}
