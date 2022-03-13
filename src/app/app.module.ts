import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanzadorQRComponent } from './views/lanzador-qr/lanzador-qr.component';
import { StatusOkComponent } from './views/status-ok/status-ok.component';
import { StatusErrorComponent } from './views/status-error/status-error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LanzadorQRComponent,
    StatusOkComponent,
    StatusErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxQRCodeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
