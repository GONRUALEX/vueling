import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@core/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private _router: Router) {}

  goBack() {
    this._router.navigateByUrl("/");
  }

  isHome(): boolean {
    return this._router.url != "/";
  }
}
