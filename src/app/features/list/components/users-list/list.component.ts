import { Component, Input, TemplateRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectAllUsers, selectUsersLoading } from '../../store/selectors/users.selectors';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() itemTemplate!: TemplateRef<any>;

  private store = inject(Store);
  users = toSignal(this.store.select(selectAllUsers));
  loading = toSignal(this.store.select(selectUsersLoading));
}
