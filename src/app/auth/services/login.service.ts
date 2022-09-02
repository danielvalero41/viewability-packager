import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: any;
  Oldpassword: any;
  attribute: any;
  userName: any;
  key: any;

  _baseURL: string =
    'http://viewability-packager.tvazteca.digital/api/my-ad-manager/user';

  constructor(public router: Router, private http: HttpClient) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        // this.autenticado = true;

        return true;
      })
      .catch(() => {
        // this.autenticado = false;
        return false;
      });
  }

  getKeyToken() {
    return localStorage.getItem('key');
  }

  setKeyToken(key) {
    localStorage.setItem('key', key);
  }

  async loginUser(email: string, password: string) {
    try {
      const user = await Auth.signIn(email, password);

      return user;
    } catch (error) {
      return null;
    }
  }

  logoutUser() {
    try {
      Auth.signOut();
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      return true;
    } catch (error) {
      return false;
    }
  }

  getKey(email): Observable<any> {
    // felixdaza153@gmail.com
    const url = `${this._baseURL}?email=${email}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }
}
