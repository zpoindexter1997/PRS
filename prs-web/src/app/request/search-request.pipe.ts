import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string): Request[] {
    if(requests == null || searchCriteria.length == 0){
      return requests;
    }
    let search = searchCriteria.toLowerCase();
    let selectedRequests: Request[] = [];
    for(let r of requests){
      if(r.id.toString().includes(search)
    || r.justification.toLowerCase().includes(search)
    || r.status.toLowerCase().includes(search)
    || (r.rejectionReason !== null && r.rejectionReason.toLowerCase().includes(search))
    || (r.deliveryMode !== null && r.deliveryMode.toLowerCase().includes(search))
    || r.userId.toString().includes(search)
    ){
        selectedRequests.push(r);
      }
    }
    return selectedRequests;
  }
}
