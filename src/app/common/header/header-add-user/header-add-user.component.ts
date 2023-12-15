import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'header-add-user',
  templateUrl: 'header-add-user.component.html',
  styleUrl: 'header-add-user.component.scss',
  standalone: true,
  imports: [CommonModule],
})
class HeaderAddUserComponent {
  userClicked: boolean = false;

  handleAddUserClick() {
    this.userClicked = true;

    setTimeout(() => {
      this.userClicked = false;
    }, 500);
  }
}

export { HeaderAddUserComponent };
