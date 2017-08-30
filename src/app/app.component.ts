import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
  '../../node_modules/@progress/kendo-theme-default/dist/all.css'],
  // prevent style encapsulation
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
