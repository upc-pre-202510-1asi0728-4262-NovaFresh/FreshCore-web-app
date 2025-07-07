import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {UserInformationItem} from "../user-information-item/user-information-item";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-user-information-edit-item',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatInput,
    MatDialogTitle,
    FormsModule,
    MatDialogActions,
    MatButton,
    MatLabel,
    TranslateModule
  ],
  templateUrl: './user-information-edit-item.html',
  styleUrl: './user-information-edit-item.css'
})
export class UserInformationEditItem {
  constructor(
    public dialogRef: MatDialogRef<UserInformationItem>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  onSave(): void {
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
