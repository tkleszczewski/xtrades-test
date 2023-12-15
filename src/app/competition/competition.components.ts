import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IPodiumCard, Image } from '../views/home/home.service';
import { DaysAfterPipe } from '../pipes/days-after.pipe';
import { BalancePipe } from '../pipes/balance.pipe';

@Component({
  selector: 'app-competition',
  standalone: true,
  styleUrl: 'competition.component.scss',
  templateUrl: 'competition.component.html',
  imports: [CommonModule, DaysAfterPipe, BalancePipe],
})
class CompetitionComponent implements OnInit {
  @Input()
  userImages: Image[] = [];

  @Input()
  heading: string = '';

  @Input()
  podiumCards: IPodiumCard[] = [];

  @Input()
  places: string[] = [];

  @Input()
  dateOfExpiration: number = Date.now();

  nowDate: number = Date.now();

  ngOnInit() {
    this.nowDate = Date.now();
  }

  daysAfter() {}
}

export { CompetitionComponent };
