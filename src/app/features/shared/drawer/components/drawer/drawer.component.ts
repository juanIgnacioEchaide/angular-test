import { Component, computed } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DrawerService } from '../../service/drawer.service';
import { routes } from '../../../../../app.routes';
import { DrawerContentComponent } from "../drawer-content/drawer-content.component";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, DrawerContentComponent],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  constructor(public drawer: DrawerService) { }
  
  routes = computed(() => [
    { name: 'Home', route: '/home' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' }
  ]);

  isOpen = computed(() => this.drawer.isOpen());


}
