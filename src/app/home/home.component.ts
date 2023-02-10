import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: any = '';
  constructor(
    private userService: UserService
  ) {}

  search() {
    if(this.username.length > 0){
      this.userService.getUser(this.username).subscribe(
        (result) => {

        },
        (error) => {
          
        }
      )
    }
  }

  ngOnInit() {}
}
