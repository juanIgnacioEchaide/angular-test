import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  isOpen = signal<boolean>(true);

  toggleDrawer = () => this.isOpen.update(value => !value);
  openDrawer = () => this.isOpen.set(true);
  closeDrawer = () => this.isOpen.set(false);
}
