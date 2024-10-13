import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "./login-dialog/login-dialog.component";
import { AuthService } from "@core/services/auth.service";
import { Subscription } from "rxjs";
import { User } from "@shared/models/interface/user";
import { WarningServiceService } from "@shared/services/warning-service.service";
import { WarningType } from "@shared/models/types/warningType";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private _authSubscription!: Subscription;
  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _warninService: WarningServiceService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._authSubscription = this._authService.isLoggedIn$.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn;
      }
    );
  }

  logout(): void {
    this._authService.logout();
    this._router.navigate(["/home"]);
    this._warninService.showMessage("Vuelve pronto! 👋", WarningType.Success);
  }

  openLoginDialog(): void {
    const dialogRef = this._dialog.open(LoginDialogComponent, {
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((formData) => {
      if (formData) {
        this.handleLogin(formData);
      }
    });
  }

  handleLogin(formData: User): void {
    this._authService.login(formData);
    this._router.navigate(["/airportsList"]);
    this._warninService.showMessage(
      `Bienvenid@ ${formData.username} 🙌`,
      WarningType.Success
    );
  }

  name() {
    return this._authService.name;
  }

  ngOnDestroy(): void {
    if (this._authSubscription) {
      this._authSubscription.unsubscribe();
    }
  }
}
