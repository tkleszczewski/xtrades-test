import { Component } from '@angular/core';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HeaderAddUserComponent } from './header-add-user/header-add-user.component';

@Component({
  selector: 'app-header',
  styleUrl: 'header.component.scss',
  templateUrl: 'header.component.html',
  standalone: true,
  imports: [HeaderUserComponent, HeaderAddUserComponent],
})
class HeaderComponent {}

export { HeaderComponent };
