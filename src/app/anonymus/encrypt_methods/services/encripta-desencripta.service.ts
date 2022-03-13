import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  desencriptacionAES,
  desencriptacionRSA,
  encriptacionAES,
  encriptacionRSA,
} from '../models/model.encripta';

@Injectable({
  providedIn: 'root',
})
export class EncriptaDesencriptaService {
  constructor(private http: HttpClient) {}

  encriptacionAES(response: object): Observable<encriptacionAES> {
    const url = environment.ENCRIPT.AES;
    let headers = new HttpHeaders({
      Authorization: `Inherit auth from parent`,
      'Content-Type': 'application/json',
    });
    const res = this.http.post<encriptacionAES>(url, JSON.stringify(response), {
      headers,
    });
    return res;
  }
  encriptacionRSA(response: object): Observable<encriptacionRSA> {
    console.log(response);
    const url = environment.ENCRIPT.RSA;
    let headers = new HttpHeaders({
      Authorization: `Inherit auth from parent`,
      'Content-Type': 'application/json',
    });
    const res = this.http.post<encriptacionRSA>(url, JSON.stringify(response), {
      headers,
    });
    return res;
  }
  desencriptaAES(response: any): Observable<desencriptacionAES> {
    const url = environment.DECRIPT.AES;
    let headers = new HttpHeaders({
      Authorization: `Inherit auth from parent`,
      'Content-Type': 'application/json',
    });
    const res = this.http.post<desencriptacionAES>(
      url,
      JSON.stringify(response),
      {
        headers,
      }
    );
    return res;
  }
  desencriptaRSA(response: string): Observable<encriptacionRSA> {
    const url = environment.ENCRIPT.RSA;
    let headers = new HttpHeaders({
      Authorization: `Inherit auth from parent`,
      'Content-Type': 'application/json',
    });
    const res = this.http.post<desencriptacionRSA>(
      url,
      JSON.stringify(response),
      {
        headers,
      }
    );
    return res;
  }
}
