import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { authToken } from '../models/model.auth.token';
import { Observable } from 'rxjs';
import { keysAuth } from '../models/models.llaves.acceso';
import {
  encriptacionAES,
  encriptacionRSA,
  desencriptacionAES,
  desencriptacionRSA,
} from '../../encrypt_methods/models/model.encripta';
import { EncriptaDesencriptaService } from '../../encrypt_methods/services/encripta-desencripta.service';
@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  constructor(
    private http: HttpClient,
    metodos_encriptacion: EncriptaDesencriptaService
  ) {}

  obtenerBearer(): Observable<authToken> {
    const usr = environment.USR;
    const pwd = environment.PWD;
    const authBasic = `${usr}:${pwd}`;
    let params = new URLSearchParams();
    params.append('username', usr);
    params.append('password', pwd);
    params.append('grant_type', 'client_credentials');

    let headers = new HttpHeaders({
      Authorization: `Basic ${window.btoa(authBasic)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const url = environment.SECURITY.AUTH;

    return this.http.post<authToken>(url, params, {
      headers,
    });
  }

  obtenerLlavesAuth(token: string): any {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(environment.SECURITY.LLAVES_ACCESO, {
      headers,
    });
  }

  async obtenerToken(data: keysAuth) {
    let resultKey = data.resultado;
    let body = {
      key: environment.KEY,
      valor: resultKey.accesoPublico,
      hash: resultKey.codigoAutentificacionHash,
      accesoSimetrico: resultKey.accesoSimetrico,
    };
    return body;
  }
}
