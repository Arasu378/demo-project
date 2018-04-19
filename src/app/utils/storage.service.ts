import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }
  public getContentType(): string {
    return 'application/json';
  }
  public setToken(token: string): void {
    this.setKeyValue('token', token);
  }
  public getToken(): string {
    return this.getKeyValue('token');
  }
  private setKeyValue(key: string, value: string): void {
    window.sessionStorage.setItem(key, value);
  }
  private getKeyValue(key: string): string {
    return window.sessionStorage.getItem(key);
  }
 public isAuthenticated() {
    if (this.getToken() != null) {
      const promise = new Promise(
        (resolve, reject) => {
          resolve(false);
        }
      );
      return promise;
    } else {
      const promise1 = new Promise(
        (resolve, reject) => {
          resolve(false);
        }
      );
      return promise1;
    }

 }

}
