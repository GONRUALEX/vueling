import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WarningType } from '@shared/models/types/warningType';

@Injectable({
  providedIn: 'root'
})
export class WarningServiceService {

  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, type: WarningType, duration: number = 3000): void {
    let panelClass = '';

    switch (type) {
      case WarningType.Error:
        panelClass = 'snackbar-error';
        break;
      case WarningType.Warning:
        panelClass = 'snackbar-warning';
        break;
      case WarningType.Success:
        panelClass = 'snackbar-success';
        break;
    }

    this.snackBar.open(message, 'Cerrar', {
      duration,
      panelClass: [panelClass],
    });
  }
}
