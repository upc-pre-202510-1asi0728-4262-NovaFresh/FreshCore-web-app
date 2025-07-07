import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacilityServiceService } from '../../service/facility-service.service';
import { AddContainerDialog } from '../add-container-dialog/add-container-dialog';
import { FacilityDetails } from '../facility-details/facility-details';
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import { FacilityCreate } from "../facility-create/facility-create";
import { FacilityItems } from "../facility-items/facility-items";
import { Facility } from '../../model/facility-model/facility.model';
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-facility-tab',
  standalone: true,
  templateUrl: './facility-tab.html',
  imports: [
    FacilityDetails,
    MatTabGroup,
    MatTab,
    MatSidenavContainer,
    FacilityCreate,
    FacilityItems,
    MatSidenav,
    MatSidenavModule,
    MatButtonToggle,
    MatButton,
    MatIcon,
    TranslateModule
  ],
  styleUrls: ['./facility-tab.css']
})
export class FacilityTab implements OnInit {
  allFacilities: Facility[] = [];
  facility: any;
  opened: boolean = false;
  isCreatingFacility: boolean = false;

  @ViewChild('createSidenav') createSidenav!: MatSidenav;
  @ViewChild(FacilityDetails) facilityDetailsComponent!: FacilityDetails;

  constructor(private facilityService: FacilityServiceService, public dialog: MatDialog) {}

  ngOnInit() {
    this.loadFacilities();
  }

  loadFacilities() {
    const accountId = localStorage.getItem('accountId');
    if (accountId) {
      this.facilityService.getGroupsByAccount(accountId).subscribe((data: Facility[]) => {
        this.allFacilities = data;
      });
    }
  }

  openCreateSidenav() {
    this.isCreatingFacility = true;
  }

  closeCreateSidenav() {
    this.isCreatingFacility = false;
  }

  onFacilityCreated() {
    this.closeCreateSidenav();
    this.loadFacilities();
  }


  showFacilityDetails(facilityId: number) {
    this.facilityDetailsComponent.loadFacility(facilityId);
  }

  openAddContainerDialog() {
    const dialogRef = this.dialog.open(AddContainerDialog, {
      width: '300px',
      data: { accountId: this.facility.accountId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addContainer(result);
      }
    });
  }

  addContainer(containerData: any) {
    if (this.facility && this.facility.id) {
      this.facilityService.registerContainer(this.facility.id, containerData).subscribe(
        response => {
          console.log('Container registered successfully:', response);
        },
        error => {
          console.error('Error registering container:', error);
        }
      );
    }
  }
}
