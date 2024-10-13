import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { User } from '@shared/models/interface/user';
import { AuthStorage } from '@shared/models/interface/authStorage';
import { STORAGE_KEY } from '@shared/utils/constants';

describe('AuthService', () => {
  let service: AuthService;
  let mockLocalStorage: { [key: string]: string | null } = {};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);

    spyOn(localStorage, 'getItem').and.callFake((key: string): string | null => {
      return mockLocalStorage[key] || null;
    });

    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): void => {
      mockLocalStorage[key] = value;
    });

    spyOn(localStorage, 'removeItem').and.callFake((key: string): void => {
      delete mockLocalStorage[key];
    });
  });

  afterEach(() => {
    mockLocalStorage = {};
  });

  it('debería crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería iniciar sesión y almacenar el objeto en localStorage', () => {
    const user: User = { username: 'user', password: 'user' };

    service.login(user);

    const storedAuth = JSON.parse(localStorage.getItem(STORAGE_KEY)!) as AuthStorage;
    expect(storedAuth).toBeDefined();
    expect(storedAuth.name).toBe('user');
    expect(service.name).toBe('user');
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('debería cerrar sesión y eliminar el objeto del localStorage', () => {
    const user: User = { username: 'user', password: 'user' };

    service.login(user);
    service.logout();

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
    expect(service.name).toBeNull();
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('debería devolver true si existe la clave en el localStorage', async () => {
    const authData: AuthStorage = { key: 'user', name: 'user' };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authData));

    const keyExists = await service.isKeyInLocalStorage();
    expect(keyExists).toBeTrue();
    expect(service.name).toBe('user');
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('debería devolver false si no existe la clave en el localStorage', async () => {
    const keyExists = await service.isKeyInLocalStorage();
    expect(keyExists).toBeFalse();
    expect(service.name).toBeNull();
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('debería verificar el estado de login al inicializar (logged out)', () => {
    service = TestBed.inject(AuthService);
    expect(service.name).toBeNull();
    expect(service.isLoggedIn()).toBeFalse();
  });
});