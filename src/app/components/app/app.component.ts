import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {declareI18nVariable} from '@angular/compiler/src/render3/view/i18n/util';
import { UserModel } from 'src/app/models/UserModel';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-root',
  template: `<h1>hello {{msg}}!</h1>
    <app-user *ngFor="let u of users" [user]="u"></app-user>
  `,
  styles: [`h1 {
    background: silver;
  }`]
})

export class AppComponent {
  msg = 'users';
  users: UserModel[];

  constructor( private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);

  }


}
