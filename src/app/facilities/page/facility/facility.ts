import { Component } from '@angular/core';
import { FacilityItems } from "../../component/facility-items/facility-items";
import { FacilityTab } from "../../component/facility-tab/facility-tab";
import {FacilityDetails} from "../../component/facility-details/facility-details";
import {MatButtonToggle} from "@angular/material/button-toggle";


@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [
    FacilityItems,
    FacilityTab,
    FacilityDetails,
    MatButtonToggle,
  ],
  templateUrl: './facility.html',
  styleUrl: './facility.css'
})
export class Facility {

}
