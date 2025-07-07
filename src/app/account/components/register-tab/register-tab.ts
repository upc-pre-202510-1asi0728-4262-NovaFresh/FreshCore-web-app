import {Component, EventEmitter, Output} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register-tab',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './register-tab.html',
  styleUrl: './register-tab.css'
})
export class RegisterTab {
  @Output() tabChanged = new EventEmitter<'worker' | 'owner'>();
  activeTab: 'worker' | 'owner' = 'worker';

  selectTab(tab: 'worker' | 'owner') {
    this.activeTab = tab;
    this.tabChanged.emit(tab);
  }
}
