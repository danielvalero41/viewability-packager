import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiAdManagerService {
  linkSelected: string;
  _baseURL: string = 'http://3.13.69.0:80/api/my-ad-manager';

  constructor(private http: HttpClient) {}

  networkMain(): Observable<any> {
    const url = `${this._baseURL}/network/info`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  resetPlacements(): Observable<any> {
    const url = `${this._baseURL}/reset-placements-bd`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  resetAdUnits(): Observable<any> {
    const url = `${this._baseURL}/reset-ad-units-bd`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  getListConfigReport(): Observable<any> {
    const url = `${this._baseURL}/list-config-reporte`;

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
    const url = `${this._baseURL}/cargar-config-reporte`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  getListLog(body): Observable<any> {
    const url = `${this._baseURL}/list-logs`;
    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  loadPlacementsAdmanager(): Observable<any> {
    const url = `${this._baseURL}/cargar-placements-admanager`;

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
    const url = `${this._baseURL}/cargar-ad-units-admanager`;

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
    const url = `${this._baseURL}/reporte`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  listAdUnits(): Observable<any> {
    const url = `${this._baseURL}/list-ad-units`;

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

  adUnitsConfig(): Observable<any> {
    const url = `${this._baseURL}/ad-units/config`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  placementsConfig(): Observable<any> {
    const url = `${this._baseURL}/placements/config`;

    return this.http
      .get(url, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  detailsAdUnit(body): Observable<any> {
    const url = `${this._baseURL}/list-ad-units`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  detailsPlacements(body): Observable<any> {
    const url = `${this._baseURL}/list-placements`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  editarAdUnit(body): Observable<any> {
    const url = `${this._baseURL}/cargar-ad-units-mongo`;

    return this.http
      .post(url, body, {
        headers: new HttpHeaders({
          Accept: '*/*',
        }),
      })
      .pipe(map((data) => data));
  }

  getListRules(): Observable<any> {
    const url = `${this._baseURL}/list-rules`;

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
    const url = `${this._baseURL}/list-placements`;

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
}