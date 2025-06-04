import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output, output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer-content',
  imports: [CommonModule, RouterModule],
  templateUrl: './drawer-content.component.html',
  styleUrl: './drawer-content.component.scss'
})
export class DrawerContentComponent {
  constructor() { }

  @Output() onCloseDrawer = new EventEmitter<void>();

  public routes: { title: string, path: string }[] = [
    {
      title: 'Users',
      path: 'users'
    },
    {
      title: 'Machines',
      path: 'machines'
    },
  ]

  private router = inject(Router)

  isSelect(route: string): boolean {
    return this.router.url === route;
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
    this.onCloseDrawer.emit()
  }
  /* en este caso la sintaxis nueva hubiese sido más código */
}
