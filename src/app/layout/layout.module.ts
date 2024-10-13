import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SharedModule } from "@shared/shared.module";
import { LoginComponent } from "./login/login.component";
import { LoginDialogComponent } from "./login/login-dialog/login-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginDialogComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
