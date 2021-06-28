import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if(users == null || searchCriteria.length == 0){
      return users;
    }
    let search = searchCriteria.toLowerCase();
    let selectedCusts: User[] = [];
    for(let u of users){
      if(u.id.toString().includes(search)
    || u.username.toLowerCase().includes(search)
    || u.firstname.toLowerCase().includes(search)
    || u.lastname.toString().includes(search)
    || (u.phone !== null && u.phone.toString().includes(search))
    || u.email.toLowerCase().includes(search)
    ){
        selectedCusts.push(u);
      }
    }
    return selectedCusts;
  }

}
