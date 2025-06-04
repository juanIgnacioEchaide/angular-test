import { Component, computed, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../drawer/components/drawer/drawer.component';
import { DrawerService } from '../drawer/service/drawer.service';
import { routes } from '../../../app.routes';
import { filter } from 'rxjs';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DrawerComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  drawer = inject(DrawerService);
  router = inject(Router);

  private urlSignal = signal(this.router.url);

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  currentSection = computed(() => this.capitalize(this.urlSignal().split('/')[1]));

  routes = computed(() => routes.map(r => ({ name: this.capitalize(r.path || ''), route: `/${r.path}` })));

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.urlSignal.set(event.urlAfterRedirects);
      });
  }
}
