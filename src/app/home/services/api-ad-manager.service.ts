import { LoginService } from './../../auth/services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiAdManagerService {
  linkSelected: string;
  updateListFav = new Subject();

  parentId = new Subject<any>();
  _baseURL: string =
    'http://viewability-packager.tvazteca.digital/api/my-ad-manager';

  constructor(private http: HttpClient, public apiLogin: LoginService) {}

  networkMain(): Observable<any> {
    const url = `${
      this._baseURL
    }/network/info?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  resetPlacements(): Observable<any> {
    const url = `${
      this._baseURL
    }/reset-placements-bd?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  resetAdUnits(): Observable<any> {
    const url = `${
      this._baseURL
    }/reset-ad-units-bd?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  getListConfigReport(): Observable<any> {
    const url = `${
      this._baseURL
    }/list-config-reporte?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(
        url,
        {},
        {
          headers: new HttpHeaders({
            Accept: '*/*',
          }),
        }
      )
      .pipe(map((data) => data));
  }

  loadConfigReport(body): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-config-reporte?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  getListLog(body): Observable<any> {
    const url = `${this._baseURL}/list-logs?key=${this.apiLogin.getKeyToken()}`;
    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  loadPlacementsAdmanager(): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-placements-admanager?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(
        url,
        {},
        {
          headers: new HttpHeaders({
            Accept: '*/*',
          }),
        }
      )
      .pipe(map((data) => data));
  }

  loadAdunitsAdmanager(): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-ad-units-admanager?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(
        url,
        {},
        {
          headers: new HttpHeaders({
            Accept: '*/*',
          }),
        }
      )
      .pipe(map((data) => data));
  }

  getReport(body): Observable<any> {
    const url = `${this._baseURL}/reporte?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  loadParentId(body): Observable<any> {
    const url = `${
      this._baseURL
    }/list-ad-units?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  listAdUnits(): Observable<any> {
    const url = `${
      this._baseURL
    }/list-ad-units?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(
        url,
        {},
        {
          headers: new HttpHeaders({
            Accept: '*/*',
          }),
        }
      )
      .pipe(map((data) => data));
  }

  filterListAdUnits(body): Observable<any> {
    const url = `${
      this._baseURL
    }/list-ad-units?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  adUnitsConfig(): Observable<any> {
    const url = `http://localhost:5000/api/my-ad-manager/ad-units/config?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  placementsConfig(): Observable<any> {
    const url = `${
      this._baseURL
    }/placements/config?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  detailsAdUnit(body): Observable<any> {
    const url = `${
      this._baseURL
    }/list-ad-units?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  detailsPlacements(body): Observable<any> {
    const url = `${
      this._baseURL
    }/list-placements?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  editarAdUnit(body): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-ad-units-mongo?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  editarPlacements(body): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-placements-mongo?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  addRules(body): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-rules-mongo?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  getListRules(): Observable<any> {
    const url = `${
      this._baseURL
    }/list-rules?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(
        url,
        {},
        {
          headers: new HttpHeaders({
            Accept: '*/*',
          }),
        }
      )
      .pipe(map((data) => data));
  }

  getListPlacements(): Observable<any> {
    const url = `${
      this._baseURL
    }/list-placements?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(
        url,
        {},
        {
          headers: new HttpHeaders({
            Accept: '*/*',
          }),
        }
      )
      .pipe(map((data) => data));
  }

  filterListPlacements(body): Observable<any> {
    const url = `${
      this._baseURL
    }/list-placements?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  searchRules(body): Observable<any> {
    const url = `${
      this._baseURL
    }/list-rules?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  listAdSizesFav(): Observable<any> {
    const url = `${
      this._baseURL
    }/ad-units/sizes?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  updateListAdSizesFav(body): Observable<any> {
    const url = `${
      this._baseURL
    }/cargar-sizes-mongo?key=${this.apiLogin.getKeyToken()}`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }
}
