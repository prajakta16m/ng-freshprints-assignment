import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public username: any = '';
  constructor(private userService: UserService) {}

  search() {
    if (this.username.length > 0) {
      this.userService.getUser(this.username).subscribe((user) => {
        console.log('success');
        console.log(user);

        /* const newUser = new User();
        newUser.login = user['login'];
        newUser.name = user['name'];
        newUser.avatar = user['']; */
      });
    }
  }

  ngOnInit() {}
}
