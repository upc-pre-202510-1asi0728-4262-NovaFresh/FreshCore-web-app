import {Component, OnInit} from '@angular/core';
import {
  AccountInformationItem
} from "../../component/account-information-item/account-information-item";
import {UserInformationItem} from "../../component/user-information-item/user-information-item";
import { TranslateModule } from '@ngx-translate/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    AccountInformationItem,
    UserInformationItem,
    TranslateModule,
    NgIf
  ],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account {

    constructor() { }


      privileges: string[] = JSON.parse(localStorage.getItem('privileges') || '[]')
      workerValidator : boolean = this.privileges.includes('WorkerManagement');
      groupValidator : boolean = this.privileges.includes('GroupManagement');
      accountValidator : boolean = this.privileges.includes('AccountManagement');
}
