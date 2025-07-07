import { Component } from '@angular/core';
import {NotificationItem} from "../../component/notification-item/notification-item";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    NotificationItem
  ],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

}
