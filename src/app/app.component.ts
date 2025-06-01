import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ListComponent } from './features/list/components/users-list/list.component';
import { UsersFacade } from './features/list/store/users.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private facade: UsersFacade) {
    this.facade.loadUsers();
  }
}
