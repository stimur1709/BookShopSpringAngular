import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IUser} from "../../model/IUser";
import {UsersService} from "../../services/users.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  title = 'angular client'
  loading = false
  // Заменили на стрим
  // users: IUser[] = []
  users$: Observable<IUser[]>
  searchName = '';

  constructor(private usersService: UsersService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.users$ = this.usersService.getAll().pipe(tap(() => this.loading = false))
    // Заменили на стрим
    // this.usersService.getAll().subscribe(users => {
    //   this.users = users
    //   this.loading = false
    // })
  }
}
