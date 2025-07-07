import {Component, EventEmitter, Output} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbarModule,
      MatIconModule,
        MatButtonModule
  ],
  templateUrl: './toolbar-content.html',
  styleUrl: './toolbar-content.css',

})
export class ToolbarContent {

  @Output() drawerToggle = new EventEmitter<void>();

  onMenuClick() {
    this.drawerToggle.emit();
  }

}
