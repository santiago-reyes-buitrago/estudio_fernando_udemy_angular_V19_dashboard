import {Component, input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'heavy-loaders-slow',
  imports: [
    NgClass
  ],
  templateUrl: './heavy-loaders-slow.html',
  styleUrl: './heavy-loaders-slow.css'
})
export class HeavyLoadersSlow {
  cssClass = input.required<string>()
  constructor() {
    console.log('HeavyLoadersSlow');
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    console.log('Cargado');
  }
}
