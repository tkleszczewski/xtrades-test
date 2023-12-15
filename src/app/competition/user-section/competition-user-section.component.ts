import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DaysAfterPipe } from '../../pipes/days-after.pipe';

@Component({
  selector: 'competition-user-section',
  styleUrl: 'competition-user-section.component.scss',
  templateUrl: 'competition-user-section.component.html',
  standalone: true,
  imports: [CommonModule, DaysAfterPipe],
})
class CompetitionUserSectionComponent {
  @Input()
  dateOfExpiration: number = 0;

  @Input()
  nowDate: number = 0;
}

export { CompetitionUserSectionComponent };
