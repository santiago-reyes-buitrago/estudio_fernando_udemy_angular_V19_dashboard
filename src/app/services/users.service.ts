import {Injectable, signal} from '@angular/core';
import User from '../dashboard/pages/user/user';

interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private state = signal<State>({
    loading: true,
    users: []
  })

  constructor() {
    console.log('cargando data...');
  }

}
