import { Injectable } from '@angular/core';

const registeredUsers = [
  {
    name: 'Pera Peric',
    email: 'pera@gmail.com',
    passwordHash: 'u:pera@gmail.com;p:perazdera'
  },
  {
    name: 'Klark Kent',
    email: 'klark@gmail.com',
    passwordHash: 'u:klark@gmail.com;p:cripton'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  loggedInUser: string;

  constructor() {
    this.loggedIn = !!localStorage.getItem('authKey');
    this.loggedInUser = localStorage.getItem('user');
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = registeredUsers.find(user => {
          return user.passwordHash === `u:${email};p:${password}`;
        });
        if (foundUser) {
          localStorage.setItem('authKey', `${foundUser.passwordHash}t:unlimited`);
          localStorage.setItem('user', email);
          this.loggedIn = true;
          this.loggedInUser = email;
          resolve();
        } else {
          this.loggedIn = false;
          this.loggedInUser = null;
          resolve('Bad login information');
        }
      }, 800);
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.removeItem('authKey');
        localStorage.removeItem('user');
        this.loggedIn = false;
        this.loggedInUser = null;
        resolve(true);
      }, 800);
    });
  }

  isAuthenticated() {
    // Should actually be handled by server using a token;
    return this.loggedIn;
  }

  isAdmin() {
    // Should actually be handled by server using a token;
    return this.loggedInUser === 'klark@gmail.com';
  }
}
