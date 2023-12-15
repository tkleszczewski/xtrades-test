import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IPodiumCard, Image } from '../views/home/home.service';
import { DaysAfterPipe } from '../pipes/days-after.pipe';
import { BalancePipe } from '../pipes/balance.pipe';
import { CompetitionPodiumCardComponent } from './podium-card/podium-card.component';
import { CompetitionHeaderComponent } from './header/competition-header.component';
import { CompetitionUserSectionComponent } from './user-section/competition-user-section.component';

@Component({
  selector: 'app-competition',
  standalone: true,
  styleUrl: 'competition.component.scss',
  templateUrl: 'competition.component.html',
  imports: [
    CommonModule,
    DaysAfterPipe,
    BalancePipe,
    CompetitionHeaderComponent,
    CompetitionPodiumCardComponent,
    CompetitionUserSectionComponent,
  ],
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

  viewButtonClicked: boolean = false;

  ngOnInit() {
    this.nowDate = Date.now();
  }

  handleViewButtonClick() {
    this.viewButtonClicked = true;
    setTimeout(() => {
      this.viewButtonClicked = false;
    }, 500);
  }
}

export { CompetitionComponent };
