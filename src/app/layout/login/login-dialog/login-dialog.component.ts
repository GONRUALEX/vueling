import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-login-dialog",
  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"],
})
export class LoginDialogComponent {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<LoginDialogComponent>
  ) {
    this.loginForm = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this._dialogRef.close(this.loginForm.value);
    }
  }
}
