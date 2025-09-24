import {Component, computed, inject} from '@angular/core';
import {Title} from '../../../shared/title/title';
import {ActivatedRoute} from '@angular/router';
import type {Data} from '../../../interfaces/User-reponse';
import {toSignal} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs';
import {UsersService} from '@services/users.service';

@Component({
  selector: 'app-user',
  imports: [
    Title
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export default class User {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // user = signal<Data|undefined>(undefined)
  user = toSignal<Data|undefined>(this.route.params.pipe(
    switchMap(({id}) =>  this.userService.getUserById(id))
  ))
  titleLabel = computed(() => this.user()?.first_name || 'Informacion del usuario')
}
