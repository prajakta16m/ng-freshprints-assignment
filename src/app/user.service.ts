import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: String) {
    return this.http.get(`${this.URL}/${username}`);
  }
}
