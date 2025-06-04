import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer-content',
  imports: [CommonModule],
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.scss'
})
export class DrawerContentComponent {
  constructor() { }

  private router = inject(Router)
  get currentRoute(): string {
    return this.router.url;
  }

  isSelected(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
  /* en este caso la sintaxis nueva hubiese sido más código */
}
