import {Component, OnInit} from '@angular/core';
import {ContainerDetails} from "../../components/container-details/container-details";
import {ContainerItem} from "../../components/container-item/container-item";
import {ContainerTab} from "../../components/container-tab/container-tab";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ContainerDetails,
    ContainerItem,
    ContainerTab
  ],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container implements OnInit {
    constructor() {}
  ngOnInit() {
      console.log(localStorage);
  }
}
