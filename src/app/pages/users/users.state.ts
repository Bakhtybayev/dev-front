import { signal } from '@angular/core';

export interface UsersState {
  request: any; //UsersViewModel | null;
  isLoading: boolean;
  error: any;
}

export const usersState = signal<UsersState>({
  request: null,
  isLoading: false,
  error: null,
});
