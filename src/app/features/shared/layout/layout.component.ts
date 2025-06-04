import { Component, computed } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../drawer/components/drawer/drawer.component';
import { DrawerService } from '../drawer/service/drawer.service';
import { routes } from '../../../app.routes';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DrawerComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(public drawer: DrawerService) { }
  routes = computed(() => routes.map(r => ({ name: r.path, route: `/${r.path}` })))
}
