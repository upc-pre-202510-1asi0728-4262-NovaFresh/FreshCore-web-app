import { Component } from '@angular/core';
import { WorkerItems } from "../../components/worker-items/worker-items";
import {WorkerDetails} from "../../components/worker-details/worker-details";
import {FacilityDetails} from "../../../facilities/component/facility-details/facility-details";
import {FacilityTab} from "../../../facilities/component/facility-tab/facility-tab";
import {WorkerTab} from "../../components/worker-tab/worker-tab";

@Component({
  selector: 'app-worker',
  standalone: true,
  imports: [
    WorkerItems,
    WorkerDetails,
    FacilityDetails,
    FacilityTab,
    WorkerTab
  ],
  templateUrl: './worker.html',
  styleUrl: './worker.css'
})
export class Worker {

}
