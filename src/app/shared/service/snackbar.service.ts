import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackbarErrorWrongParameters
} from "../snackbar-error-wrong-parameters/snackbar-error-wrong-parameters";
import {SnackbarCorrectParameters} from "../snackbar-correct-parameters/snackbar-correct-parameters";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  showMessageError(message: string) {
    this.snackBar.openFromComponent(SnackbarErrorWrongParameters, {
      data: message,
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-pastel-red'],
    });
  }

  showMessageCorrect(message: string) {
    this.snackBar.openFromComponent(SnackbarCorrectParameters, {
      data: message,
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-pastel-red'],
    });
  }
}


