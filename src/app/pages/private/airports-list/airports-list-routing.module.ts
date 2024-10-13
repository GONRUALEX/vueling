import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportsListComponent } from '@pages/private/airports-list/airports-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AirportsListComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AirportsListRoutingModule { }
