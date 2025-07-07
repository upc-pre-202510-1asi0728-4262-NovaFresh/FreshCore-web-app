import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions
} from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-worker-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    ReactiveFormsModule,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatLabel,
    TranslateModule
  ],
  templateUrl: './add-worker-dialog.html',
  styleUrls: ['./add-worker-dialog.css']
})
export class AddWorkerDialog {
  workerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddWorkerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.workerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      accountId: [data.accountId, Validators.required],
    });
  }

  onSave() {
    if (this.workerForm.valid) {
      this.dialogRef.close(this.workerForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
