import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from '../../views/home/home.service';

@Component({
  selector: 'competition-header',
  templateUrl: 'competition-header.component.html',
  styleUrl: 'competition-header.component.scss',
  standalone: true,
  imports: [CommonModule],
})
class CompetitionHeaderComponent {
  @Input()
  userImages: Image[] = [];

  @Input()
  dateOfExpiration: number = 0;

  @Input()
  nowDate: number = 0;

  @Input()
  heading: string = '';
}

export { CompetitionHeaderComponent };
