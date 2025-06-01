import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import UsersActions from './actions/users.action'
import UsersSelectors from './selectors/users.selectors';

@Injectable({ providedIn: 'root' })
export class UsersFacade {
  private store = inject(Store);

  users$ = this.store.select(UsersSelectors.selectAllUsers);
  loading$ = this.store.select(UsersSelectors.selectUsersLoading);
  error$ = this.store.select(UsersSelectors.selectUsersError);

  loadUsers() {
    this.store.dispatch(UsersActions.loadUsers());
  }
}
