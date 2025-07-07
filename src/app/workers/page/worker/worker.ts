import { Component } from '@angular/core';
import { WorkerItems } from "../../components/worker-items/worker-items";
import {WorkerDetails} from "../../components/worker-details/worker-details";
import {FacilityDetailsComponent} from "../../../facilities/components/facility-details/facility-details.component";
import {FacilityTabComponent} from "../../../facilities/components/facility-tab/facility-tab.component";
import {WorkerTab} from "../../components/worker-tab/worker-tab";

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [
    WorkerItems,
    WorkerDetails,
    FacilityDetailsComponent,
    FacilityTabComponent,
    WorkerTab
  ],
  templateUrl: './worker.html',
  styleUrl: './worker.css'
})
export class Worker {

}
