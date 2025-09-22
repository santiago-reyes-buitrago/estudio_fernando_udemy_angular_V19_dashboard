import { Component } from '@angular/core';
import {Title} from '../../../shared/title/title';

@Component({
  selector: 'view-transitions',
  imports: [
    Title
  ],
  template: `
    <app-title title="View Transition 1"/>
    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: hero1" />
      <div class="fixed bg-blue-800 w-40 h-40 rounded" style="view-transition-name: hero2"></div>
    </section>
  `
})
export default class ViewTransitions1 {

}
