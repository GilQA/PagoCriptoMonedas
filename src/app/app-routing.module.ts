import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanzadorQRComponent } from './views/lanzador-qr/lanzador-qr.component';
import { StatusErrorComponent } from './views/status-error/status-error.component';
import { StatusOkComponent } from './views/status-ok/status-ok.component';

const routes: Routes = [
  { path: 'PagoCriptoMonedas', component: LanzadorQRComponent },
  { path: 'completado', component: StatusOkComponent },
  { path: 'error', component: StatusErrorComponent },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
