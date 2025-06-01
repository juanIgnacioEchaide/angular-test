import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { loadUsersSuccess } from '../actions/users.action';

export interface UsersState {
  error: any;
  loading: any;
  users: User[];
}

const initialState: UsersState = {
    users: [],
    error: undefined,
    loading: undefined
};

const usersReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);

export const usersFeature = createFeature({
  name: 'users',
  reducer: usersReducer,
});
