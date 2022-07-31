import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private usersService: UsersService, private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl<string>('', Validators.email)
  })

  get name() {
    return this.form.controls.name as FormControl
  }

  get email() {
    return this.form.controls.email as FormControl
  }

  submit() {
    this.usersService.create({
      name: this.form.value.name as string,
      email: this.form.value.email as string
    }).subscribe(() => this.modalService.close())
  }
}
