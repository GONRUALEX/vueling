import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AirportsListComponent} from './airports-list/airports-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/airportsList',
    pathMatch: 'full'
  },
  {
    path: 'airportsList',
    component: AirportsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
