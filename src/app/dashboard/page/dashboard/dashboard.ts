import { Component } from '@angular/core';
import {
  BarChartContainersByFacility
} from "../../components/bar-chart-containers-by-facility/bar-chart-containers-by-facility";
import {
  BarChartWorkersByFacility
} from "../../components/bar-chart-workers-by-facility/bar-chart-workers-by-facility";
import {
  BaseChartStatusContainer
} from "../../components/base-chart-status-container/base-chart-status-container";
import {PieChartPrivileges} from "../../components/pie-chart-privileges/pie-chart-privileges";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BarChartContainersByFacility,
    BarChartWorkersByFacility,
    BaseChartStatusContainer,
    PieChartPrivileges
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
