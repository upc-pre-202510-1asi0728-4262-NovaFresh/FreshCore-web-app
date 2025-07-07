import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SubscriptionDialog } from '../../component/subscription-dialog/subscription-dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
	MatCardModule,
	MatButtonModule,
	MatDividerModule,
	TranslateModule
  ],
  templateUrl: './subscription.html',
  styleUrl: './subscription.css'
})
export class Subscription {
	readonly dialog = inject(MatDialog);

	openUpgradeDialog(): void {
		this.dialog.open(SubscriptionDialog, {
			width: '500px'
		});
	}

	openDowngradeDialog(): void {
		this.dialog.open(SubscriptionDialog, {
			width: '500px'
		});
	}
}
