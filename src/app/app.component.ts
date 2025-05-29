import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  mostrar = true;

  users = [
    { id: 1, name: 'Juan' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'Luis' }
  ];

  setShow() {
    this.mostrar = !this.mostrar;
  }
}
