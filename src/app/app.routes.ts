import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.routes').then((e) => e.routes),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((e) => e.LoginComponent),
  },
];
