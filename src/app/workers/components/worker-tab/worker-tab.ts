import {Component, ViewChild} from '@angular/core';
import {WorkerDetails} from "../worker-details/worker-details";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WorkerItems} from "../worker-items/worker-items";
import {CommonModule} from "@angular/common";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-worker-tab',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    WorkerItems,
    WorkerDetails,
    CommonModule,
  ],
  templateUrl: './worker-tab.html',
  styleUrl: './worker-tab.css'
})
export class WorkerTab {
  @ViewChild(WorkerDetails) workerDetailsComponent!: WorkerDetails;

  onWorkerSelected(workerId: number) {
    if (this.workerDetailsComponent) {
      this.workerDetailsComponent.loadWorker(workerId);
    } else {
      console.error("workerDetailsComponent no está inicializado");
    }
  }
}
