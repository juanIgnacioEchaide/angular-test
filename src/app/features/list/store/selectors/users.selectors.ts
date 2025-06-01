import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeature, UsersState } from '../reducer/users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

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

export default { selectUsersState, selectAllUsers, selectUsersLoading, selectUsersError, usersFeature }