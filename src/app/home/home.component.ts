import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public username: any = 'prajakta16m';
  public displayUser: User = null;
  public storedUsers = [];

  constructor(private userService: UserService) {}

  search() {
    if (this.username.length == 0) return;

    this.displayUser = this.getUser();
    if (this.displayUser == null) {
      // Make API call
      this.userService.getUser(this.username).subscribe(
        (user) => {
        this.displayUser = {
          login: user['login'],
          name: user['name'],
          avatar: user['avatar_url'],
        };

        this.storedUsers.push(this.displayUser);
        this.updateLocalStorage();
      } , 
      (error) => {
        // API Error
      }
      );
    }
  }

  updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.storedUsers));
  }

  getUser() {
    let temp = null;
    console.log('su', this.storedUsers);
    for (let item of this.storedUsers) {
      if (item.login == this.username) {
        temp = item;
        break;
      }
    }
    return temp;
  }

  ngOnInit() {
    // If User exists in local storage, display ( save API call )
    let usersList: any = localStorage.getItem('users');
    if (usersList != null) {
      this.storedUsers = JSON.parse(usersList);
    } else {
      usersList = [];
      localStorage.setItem('users', usersList);
    }
  }
}
