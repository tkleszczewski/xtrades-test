import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octPlus } from '@ng-icons/octicons';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ octPlus })],
})
class AddButtonComponent {
  addButtonClicked: boolean = false;

  handleAddButtonClick() {
    this.addButtonClicked = true;
    setTimeout(() => {
      this.addButtonClicked = false;
    }, 700);
  }
}

export { AddButtonComponent };
