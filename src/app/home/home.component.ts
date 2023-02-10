import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public username: any = 'asdfdsf';
  constructor(private userService: UserService) {}

  search() {
    alert(this.username);
    if (this.username.length > 0) {
      this.userService.getUser(this.username).subscribe((user) => {
        console.log('success');
        console.log(user);
      });
    }
  }

  ngOnInit() {}
}
