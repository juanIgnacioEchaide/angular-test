import { ApplicationConfig } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UsersEffects } from './features/list/store/effects/users.effect';
import { usersFeature } from './features/list/store/reducer/users.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState(usersFeature),
    provideEffects(UsersEffects),
  ],
};
