import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';


export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);

export default { loadUsers, loadUsersFailure, loadUsersSuccess }