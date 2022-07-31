import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from "../model/IUser";

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(users: IUser[], search: string): IUser[] {
    return users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
  }
}
