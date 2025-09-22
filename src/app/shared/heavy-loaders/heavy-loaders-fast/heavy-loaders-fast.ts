import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'heavy-loaders-fast',
  imports: [
    NgClass
  ],
  templateUrl: './heavy-loaders-fast.html',
  styleUrl: './heavy-loaders-fast.css'
})
export class HeavyLoadersFast {
  cssClass = input.required<string>();

  constructor() {
    console.log('HeavyLoadersFast');
  }

}
