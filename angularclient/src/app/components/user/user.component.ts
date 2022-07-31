import {Component, Input} from "@angular/core";
import {IUser} from "../../model/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent{
  @Input() user: IUser

  details = false
}
