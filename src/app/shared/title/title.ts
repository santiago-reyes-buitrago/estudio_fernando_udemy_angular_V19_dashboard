import {booleanAttribute, Component, input} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  title = input.required<string>()
  withShadow = input(false,{transform: booleanAttribute})
}
