import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ octPlus })],
})
class AddButtonComponent {}

export { AddButtonComponent };
