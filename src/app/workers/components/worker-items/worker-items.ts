import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WorkerServiceService} from "../../service/worker-service.service";
import {WorkerDetails} from "../worker-details/worker-details";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton} from "@angular/material/button";
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-worker-items',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatIcon,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './worker-items.html',
  styleUrl: './worker-items.css'
})
export class WorkerItems implements OnInit {
  @Input() workersItems: any[] = [];
  @Output() workerSelected = new EventEmitter<number>();

  constructor(private workerServiceService: WorkerServiceService) {}

  ngOnInit() {
    const myUserId = localStorage.getItem('userId');

    this.workerServiceService.getWorkers().subscribe((data: any[]) => {
      if (myUserId !== null) {
        this.workersItems = data.filter(worker => worker.id !== +myUserId);
      } else {
        this.workersItems = data;
      }
    });
  }

  openWorkerDialog(workerId: number) {
    this.workerSelected.emit(workerId);
  }
}
