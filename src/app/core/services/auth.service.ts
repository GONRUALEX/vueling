import { Injectable } from "@angular/core";
import { User } from "@shared/models/interface/user";
import { BehaviorSubject } from "rxjs";
import { generateRandomKey } from "@shared/utils/functions";
import { STORAGE_KEY } from "@shared/utils/constants";
import { AuthStorage } from "@shared/models/interface/authStorage";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _loggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._loggedInSubject.asObservable();
  private _key!: string;
  private _name!: User | null;

  constructor() {
    this.checkStoredLoginState();
  }

  login(data: User): void {
    const authData: AuthStorage = {
      key: generateRandomKey(6),
      name: data.username,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData)); 
    this._name = data;
    this._key = authData.key;
    this.setLoginState(true);
  }

  get name(): string | null {
    return this._name?.username || null;
  }

  getkey(): string {
    return this._key;
  }

  logout(): void {
    this._name = null;
    this.setLoginState(false);
    localStorage.removeItem(STORAGE_KEY);
  }

  isLoggedIn(): boolean {
    return this._loggedInSubject.getValue();
  }

  isKeyInLocalStorage(): Promise<boolean> {
    return new Promise((resolve) => {
      const storedAuth = localStorage.getItem(STORAGE_KEY);
      if (storedAuth) {
        const authData: AuthStorage = JSON.parse(storedAuth);
        this.setLoginState(true);
        this._name = { username: authData.name } as User;
        this._key = authData.key;
        resolve(true);
      } else {
        this.setLoginState(false);
        resolve(false);
      }
    });
  }

  private setLoginState(isLoggedIn: boolean): void {
    this._loggedInSubject.next(isLoggedIn);
  }

  private checkStoredLoginState(): void {
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth) {
      const authData: AuthStorage = JSON.parse(storedAuth);
      this._name = { username: authData.name } as User;
      this.setLoginState(true);
    }
  }
}
