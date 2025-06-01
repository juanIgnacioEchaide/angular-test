import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import UsersActions from '../actions/users.action'
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';


@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users: User[]) => UsersActions.loadUsersSuccess({users})),
          catchError(error => of(UsersActions.loadUsersFailure(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
