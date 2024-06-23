import { Injectable } from '@angular/core';
import { User } from '../models/shared.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly storageKey = 'users';

  constructor() {}

  getUsers(): User[] {
    const usersString = localStorage.getItem(this.storageKey);
    return usersString ? JSON.parse(usersString) : [];
  }

  addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }
}
