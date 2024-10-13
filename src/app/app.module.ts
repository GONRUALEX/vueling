import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/public/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        LayoutModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
