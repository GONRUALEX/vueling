import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { AirportsListComponent } from '@pages/private/airports-list/airports-list.component';
import { SharedModule } from '@shared/shared.module';
import { AirportsListRoutingModule } from '@pages/private/airports-list/airports-list-routing.module';
import { AirportsListRenderComponent } from './airports-list-render/airports-list-render.component';
import { LoginComponent } from '@layout/login/login.component';
import { LoginDialogComponent } from '@layout/login/login-dialog/login-dialog.component';
import { AirportsDetallComponent } from './airports-detall/airports-detall.component';

@NgModule({
  declarations: [
    AirportsListComponent,
    AirportsListRenderComponent,
    AirportsDetallComponent,
  ],
  imports: [
    AirportsListRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AirportsListModule { }
