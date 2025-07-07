import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-error-wrong-parameters',
  standalone: true,

  imports: [],
  templateUrl: './snackbar-error-wrong-parameters.html',
  styleUrl: './snackbar-error-wrong-parameters.css'
})
export class SnackbarErrorWrongParameters {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}
