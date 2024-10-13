import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('./pages/public/home/home.module').then((m)=>m.HomeModule),
  },
  {
    path: 'airportsList',
    canActivate:[AuthGuard],
    loadChildren: (): Promise<any> =>
      import('./pages/private/airports-list/airports-list.module').then((m)=>m.AirportsListModule),
  },
  {path:'**', pathMatch: 'full', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
