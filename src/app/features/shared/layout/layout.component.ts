import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isDrawerOpen = signal(false);

  toggleDrawer = () => this.isDrawerOpen.update(v => !v);
  closeDrawer = () => this.isDrawerOpen.set(false);
}
