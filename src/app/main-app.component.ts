import { Component } from '@angular/core';

@Component({
  selector: 'main-app-root',
  templateUrl: './main-app.component.html',
  styles: [`
    .main-content {
      max-width: 1080px;
      margin: auto;
      padding: 10px;
    }
  `]
})
export class MainAppComponent {
  title = 'app';
}
