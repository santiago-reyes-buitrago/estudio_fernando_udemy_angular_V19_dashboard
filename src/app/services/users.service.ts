import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Regresresponse, User} from '../interfaces/regres-reponse.interface';
import {delay, map} from 'rxjs';
import {UserReponse} from '../interfaces/User-reponse';

interface State {
  users: User[];
  loading: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  private state = signal<State>({
    loading: true,
    users: []
  })

  users = computed(()=> this.state().users);
  loading = computed(()=> this.state().loading);

  constructor() {
    this.http.get<Regresresponse>('https://reqres.in/api/users',{
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).pipe(
      delay(1500)
    ).subscribe(res => {
      this.state.set({
        loading: true,
        users: res.data
      })
    })
    console.log('cargando data...');
  }

  getUserById(id:string){
    return this.http.get<UserReponse>(`https://reqres.in/api/users/${id}`,{
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).pipe(
      delay(1500),
      map((res) => res.data)
    )
  }

}
