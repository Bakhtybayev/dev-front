import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.page').then((e) => e.AboutPage),
  },
  {
    path: 'friends',
    loadComponent: () =>
      import('./friends/friends.page').then((e) => e.FriendsPage),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.page').then((e) => e.UsersPage),
  },
  {
    path: 'chats',
    loadComponent: () =>
      import('./chats/chats.page').then((e) => e.ChatsPage),
  },
];
