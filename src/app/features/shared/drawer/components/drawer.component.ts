import { Component, computed } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DrawerService } from '../service/drawer.service';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {
  constructor(public drawer: DrawerService) { }

  routes = computed(() => routes.map(r => ({name: r.path, route: r.path })))
  isOpen = computed(() => this.drawer.isOpen());
}
