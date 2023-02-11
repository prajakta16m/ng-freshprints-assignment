import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public username: any = 'prajakta16m';
  public displayUser: User;
  public storedUsers = [];

  constructor(private userService: UserService) {}

  search() {
    if (this.username.length == 0) return;

    // Make API call
    this.userService.getUser(this.username).subscribe(
      (user) => {
        this.displayUser = {
          login: user['login'],
          name: user['name'],
          avatar: user['avatar_url'],
        };

        this.updateLocalStorage();
      },
      (error) => {
        // API Error
      }
    );
  }

  updateLocalStorage() {
    // If new user other than old user, push
    if (
      this.storedUsers.length > 0 && 
      this.storedUsers[this.storedUsers.length - 1].login ==
      this.displayUser.login
    ) {
      // skip adding
    } else {
      this.storedUsers.push(this.displayUser);
      localStorage.setItem('users', JSON.stringify(this.storedUsers));
    }
  }

  getLastUser() {
    let temp = null;

    /*console.log('su', this.storedUsers);
    for (let item of this.storedUsers) {
      if (item.login == this.username) {
        temp = item;
        break;
      }
    }*/
    return temp;
  }

  ngOnInit() {
    this.storedUsers = JSON.parse(localStorage.getItem('users'));
    if(this.storedUsers == null) {
      this.storedUsers = [];
    }

    // If User exists in local storage, display ( save API call )
    /*let usersList: any = localStorage.getItem('users');
    if (usersList != null) {
      this.storedUsers = JSON.parse(usersList);
    } else {
      usersList = [];
      localStorage.setItem('users', usersList);
    }*/
  }
}
