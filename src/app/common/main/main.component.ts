import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  styleUrl: 'main.component.scss',
  templateUrl: 'main.component.html',
  imports: [HeaderComponent],
  standalone: true,
})
class MainComponent {}

export { MainComponent };
