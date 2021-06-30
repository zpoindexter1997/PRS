import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'searchVendor'
})
export class SearchVendorPipe implements PipeTransform {


  transform(vendor: Vendor[], searchCriteria: string): Vendor[] {
    if(vendor == null || searchCriteria.length == 0){
      return vendor;
    }
    let search = searchCriteria.toLowerCase();
    let selectedVendors: Vendor[] = [];
    for(let v of vendor){
      if(v.id.toString().includes(search)
    || v.code.toLowerCase().includes(search)
    || v.name.toLowerCase().includes(search)
    || v.address.toString().toLowerCase().includes(search)
    || v.city.toLowerCase().includes(search)
    || v.state.toLowerCase().includes(search)
    || v.zip.toString().toLowerCase().includes(search)
    || (v.phone !== null && v.phone.toString().includes(search))
    || v.email.toLowerCase().includes(search)
    ){
        selectedVendors.push(v);
      }
    }
    return selectedVendors;
  }

}
