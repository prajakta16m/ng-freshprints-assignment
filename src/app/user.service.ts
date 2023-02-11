import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: String) : Observable<any> {
    return this.http.get(`${this.URL}/${username}`);
  }
}
