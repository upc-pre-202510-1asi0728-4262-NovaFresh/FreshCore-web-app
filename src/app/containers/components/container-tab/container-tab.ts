import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {ContainerItem} from "../container-item/container-item";
import {Container} from "../../model/container-model/container.entity";
import {ContainerServiceService} from "../../service/container-service.service";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-container-tab',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab,
    ContainerItem,
    TranslateModule
  ],
  templateUrl: './container-tab.html',
  styleUrl: './container-tab.css',
  encapsulation: ViewEncapsulation.None
})
export class ContainerTab implements  OnInit{
  allContainers: Container[] = [];
  activeContainers: Container[] = [];

    idGroup = Number(localStorage.getItem('groupId'));
    privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')


  constructor(private containerService: ContainerServiceService) {}

  ngOnInit() {
    this.loadContainers();
  }

  loadContainers() {
    if (this.privileges.includes('AccountManagement')) {
      this.containerService.getContainersByAccountId(Number(localStorage.getItem('accountId'))).subscribe((data: Container[]) => {
        this.allContainers = data;
        this.activeContainers = data.filter(container => container.lastKnownContainerStatus === 'Running');
      });
    } else {
        this.containerService.getContainersByGroupId(this.idGroup).subscribe((data: Container[]) => {
          this.allContainers = data;
          this.activeContainers = data.filter(container => container.lastKnownContainerStatus === 'Running');
        });
    }
  }
}
