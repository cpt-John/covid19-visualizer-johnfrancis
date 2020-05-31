import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServerService {
  constructor(private http: HttpClient) {}
  requestServer(url, data: any = ''): Observable<any> {
    return this.http.post(url, data);
  }
  getCountryData(): Observable<any> {
    return this.http.get('https://api.covid19india.org/data.json');
  }
  getStateData(): Observable<any> {
    return this.http.get(
      'https://api.covid19india.org/v2/state_district_wise.json'
    );
  }
}
