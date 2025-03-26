import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'statemanagement',
    loadComponent: () =>
      import('./components/ngrx-user/ngrx-user.component').then(
        (m) => m.NgrxUserComponent
      ),
  },
];
