import {Component, signal} from '@angular/core';
import {Title} from '../../../shared/title/title';

type Grade = 'A'|'B'|'C'|'F';

@Component({
  selector: 'app-control-flow',
  imports: [
    Title
  ],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export default class ControlFlow {
  showContent = signal<boolean>(false)
  grade = signal<Grade>('A')
  framweworks = signal<string[]>(['Angular','Vue','Svelte','Quik','React'])
  framweworks2 = signal<string[]>([])

  handleToogle()
  {
    this.showContent.update((item) => !item)
  }

  handleGrade(grade: Grade): void {
    this.grade.set(grade)
  }
}
