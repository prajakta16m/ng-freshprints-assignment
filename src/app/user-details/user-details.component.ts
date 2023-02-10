import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnChanges {
  @Input() data: User;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit() {
    
  }
}
