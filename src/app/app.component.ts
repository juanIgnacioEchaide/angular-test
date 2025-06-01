import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ListComponent } from "./features/list/components/users-list/list.component";
import { UserDetailComponent } from './features/list/components/user-detail/user-detail.component';



@Component({
    selector: 'app-root',
    imports: [CommonModule, ListComponent, UserDetailComponent],
    templateUrl: './app.component.html'
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
