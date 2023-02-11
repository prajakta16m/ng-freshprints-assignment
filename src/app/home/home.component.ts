import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public username: any = '';
  public displayUser: User;
  public storedUsers = [];

  usernameRegex = /^[a-z0-9_.]+$/;

  subscription: Subscription;

  constructor(private userService: UserService) {}

  search() {

    if(!this.usernameRegex.test(this.username) || this.username.length > 100){
        return;
    }


    if (this.username.length == 0) return;

    // Make API call
    this.subscription = this.userService.getUser(this.username).subscribe(
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
    return temp;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.storedUsers = JSON.parse(localStorage.getItem('users'));
    if (this.storedUsers == null) {
      this.storedUsers = [];
    }
  }
}
