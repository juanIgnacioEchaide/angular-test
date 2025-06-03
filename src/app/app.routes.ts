import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/features/shared/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('../app/features/list/pages/users-list-page/users-list-page.component').then(
            m => m.UsersListPageComponent
          ),
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
    ],
  },
];
