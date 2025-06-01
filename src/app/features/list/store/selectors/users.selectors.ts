import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from '../reducer/users.reducer';


// 1. Seleccionamos la "slice" del estado
export const selectUsersState = createFeatureSelector<UsersState>('users');

// 2. Selectores derivados
export const selectAllUsers = createSelector(
  selectUsersState,
  (state) => state.users
);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);

export const selectUsersError = createSelector(
  selectUsersState,
  (state) => state.error
);

export default { selectUsersState, selectAllUsers, selectUsersLoading, selectUsersError }