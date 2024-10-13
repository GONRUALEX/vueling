import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WarningType } from '@shared/models/types/warningType';
import { WarningServiceService } from '@shared/services/warning-service.service';
import { TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHttpService implements ErrorHandler {
  message: string = '';
  title: string = 'Error';
  notify: boolean = true;

  constructor(
    private _router: Router,
    private _warningService: WarningServiceService
  ) {}

  handleError(error: Error | HttpErrorResponse | any, title?: string, messageText?: string): void {
    switch (error.status) {
      case 400:
        this.title = 'Solicitud incorrecta. Verifique los datos ingresados.';
        break;
      case 401:
        this.title = 'No autorizado. Por favor, inicie sesión.';
        break;
      case 403:
        this.title = 'Acceso denegado. No tiene los permisos necesarios.';
        break;
      case 404:
        this.title = 'Recurso no encontrado. Verifique la URL.';
        break;
      case 406:
        this.title = 'Solicitud no aceptable. Verifique los datos.';
        break;
      case 500:
      case 501:
      case 502:
      case 503:
        this.title = 'Error interno del servidor. Inténtelo de nuevo más tarde.';
        break;
      case 504:
        this.title = 'Error de tiempo de espera. El servidor no responde.';
        break;
      default:
        if (error instanceof TimeoutError) {
          this.title = 'Error de tiempo de espera. La solicitud tardó demasiado.';
        } else {
          this.title = 'Se produjo un error inesperado. Inténtelo de nuevo más tarde.';
        }
    }

    console.log('------- Error -------', error);
    if (this.notify) {
      this._warningService.showMessage(
        this.title, WarningType.Error
      );
    }
  }
}