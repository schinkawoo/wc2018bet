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
    passwordHash: 'u:klark@gmail.com;p:criptone'
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor() {
    this.loggedIn = !!localStorage.getItem('authKey');
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = registeredUsers.find(user => {
          return user.passwordHash === `u:${email};p:${password}`;
        });
        if (foundUser) {
          localStorage.setItem('authKey', `${foundUser.passwordHash}t:unlimited`);
          this.loggedIn = true;
          resolve();
        } else {
          this.loggedIn = false;
          resolve('Bad login information');
        }
      }, 800);
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.removeItem('authKey');
        this.loggedIn = false;
        resolve(true);
      }, 800);
    });
  }

  isAuthenticated() {
    return this.loggedIn;
  }
}
