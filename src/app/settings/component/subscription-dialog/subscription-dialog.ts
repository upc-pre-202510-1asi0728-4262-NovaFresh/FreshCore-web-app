import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SettingServiceService } from '../../service/setting-service.service';
import { AccountUsage } from '../../model/subscription/subscription.entity';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-subscription-dialog',
	standalone: true,
	imports: [
		MatButtonModule,
		MatDialogModule,
		TranslateModule
	],
	templateUrl: './subscription-dialog.html',
	styleUrls: ['./subscription-dialog.css']
})
export class SubscriptionDialog {
	readonly dialogRef = inject(MatDialogRef<SubscriptionDialog>);
	accountUsage: AccountUsage = new AccountUsage();

	constructor(private settingService: SettingServiceService) {
		this.settingService.getAccountUsage().subscribe((data) => {
			this.accountUsage = data;
		});
	}
}
