import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  styleUrl: 'home.component.scss',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [CommonModule],
})
class HomeComponent {
  images: Image[] = [
    {
      src: '../../../assets/user-1.png',
      alt: 'user-1',
    },
    {
      src: '../../../assets/user-2.png',
      alt: 'user-2',
    },
    {
      src: '../../../assets/user-3.png',
      alt: 'user-3',
    },
  ];
}

export { HomeComponent };
