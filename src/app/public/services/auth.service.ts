import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/config/URL';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(email: string, password: string) {

    return this.http.post<any>(`${BASE_URL}/user/login`, {data: { email, password }})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        // console.log('authService:Login', user, user.token);

        if (user.data) {
          console.log('authService:Login', user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          this.currentUserSubject.next(user.data);
          return user.data;
        }
        return false;
      }));
  }

  update(user: User) {
    console.log('registerService', user);

    return this.http.post<any>(`${BASE_URL}/user/update`, {data: {...user}})
      .pipe(map(user => {
        if (user && user) {
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          this.currentUserSubject.next(user);
        }
      }));
  }

  register(user: User) {
    console.log('registerService', user);

    return this.http.post<any>(`${BASE_URL}/user/create`, {data: {...user}})
      .pipe(map(user => {
        if (user && user) {
          this.currentUserSubject.next(user.data);
          localStorage.setItem('currentUser', JSON.stringify(user.data));
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }
}
