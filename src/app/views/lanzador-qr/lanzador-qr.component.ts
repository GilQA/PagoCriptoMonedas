import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
import { keysAuth } from 'src/app/anonymus/auth/models/models.llaves.acceso';
import { AuthTokenService } from 'src/app/anonymus/auth/services/auth-token.service';
import {
  desencriptacionAES,
  desencriptacionRSA,
  encriptacionAES,
  encriptacionRSA,
} from 'src/app/anonymus/encrypt_methods/models/model.encripta';
import { EncriptaDesencriptaService } from 'src/app/anonymus/encrypt_methods/services/encripta-desencripta.service';

declare const cargarInicio: any;
@Component({
  selector: 'app-lanzador-qr',
  templateUrl: './lanzador-qr.component.html',
  styleUrls: ['./lanzador-qr.component.sass'],
  providers: [AuthTokenService, EncriptaDesencriptaService],
})
export class LanzadorQRComponent implements OnInit {
  @ViewChild('contenido', { static: true }) contenidoDelModal: any;

  url = 'lkdñladk';
  elementType = NgxQrcodeElementTypes.URL;

  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  constructor(
    public modal: NgbModal,
    private auth: AuthTokenService,
    private encripta: EncriptaDesencriptaService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  ngAfterViewInit(): void {
    this.open_modal();
  }
  open_modal() {
    this.modal.open(this.contenidoDelModal, { size: 'md' });
  }

  async getBearer() {
    const dataAuth = await this.auth.obtenerBearer().toPromise();
    if (dataAuth?.access_token) {
      return dataAuth.access_token;
    } else {
      return 'La consulta produjo error servicio obtenerTokenAuth';
    }
  }

  async getLlavesAcceso(token: string) {
    const respuesta = await this.auth.obtenerLlavesAuth(token).toPromise();
    const json = await (<keysAuth>respuesta);
    return json;
  }

  async getTokenAcceso(data: keysAuth) {}
  async getAll() {
    const bearer = await this.getBearer();
    const llaves = await this.getLlavesAcceso(bearer);
    const body = await this.auth.obtenerToken(llaves);
    const result_encript = await this.encripta.desencriptaAES(body).toPromise();
    console.log(result_encript);
  }
}
