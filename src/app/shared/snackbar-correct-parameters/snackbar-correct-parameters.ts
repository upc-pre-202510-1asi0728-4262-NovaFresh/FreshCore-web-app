import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snackbar-correct-parameters',
  standalone: true,
  imports: [],
  templateUrl: './snackbar-correct-parameters.html',
  styleUrl: './snackbar-correct-parameters.css'
})
export class SnackbarCorrectParameters {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

}
