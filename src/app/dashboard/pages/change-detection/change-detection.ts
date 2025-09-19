import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {Title} from '../../../shared/title/title';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'change-detection',
  imports: [
    Title,
    JsonPipe
  ],
  templateUrl: './change-detection.html',
  styleUrl: './change-detection.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChangeDetection {
  currentTitleFramweork = computed(() => this.frameworkSignal().name)
  frameworkSignal = signal({
    name: 'Angular',
    release_date: 2016
  })

  frameworkObject = {
    name: 'Angular',
    release_date: 2016
  }

  constructor() {
    setTimeout(() => {
      console.log('ChangeDetection');
      this.frameworkSignal.update((frame) => ({
        ...frame,
        name: 'React'
      }))
      // this.frameworkObject.name = 'React';
    },3000)
  }
}
