import { Component } from '@angular/core';
import {RegisterTab} from "../../components/register-tab/register-tab";
import {RegisterWorkerForm} from "../../components/register-worker-form/register-worker-form";
import {NgIf} from "@angular/common";
import {RegisterOwnerForm} from "../../components/register-owner-form/register-owner-form";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterTab,
    RegisterWorkerForm,
    NgIf,
    RegisterOwnerForm
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  activeTab: 'worker' | 'owner' = 'worker';

  onTabChanged(event: 'worker' | 'owner') {
    this.activeTab = event;
  }

}
