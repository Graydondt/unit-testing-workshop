import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private user: BehaviorSubject<string> = new BehaviorSubject('Pete');
  constructor(private http: HttpClient) {}

  getUser() {
    return this.user;
  }
}
