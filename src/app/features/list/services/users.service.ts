import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  getUsers(): Observable<User[]> {
    const mockUsers: User[] = [
      { id: 1, name: 'María' },
      { id: 2, name: 'Juan' },
      { id: 3, name: 'Lucía' },
    ];
    // Simula un delay como si fuera una llamada HTTP real
    return of(mockUsers).pipe(delay(3000));
  }
}
