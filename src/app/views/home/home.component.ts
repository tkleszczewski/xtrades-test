import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeService, ICompetition } from './home.service';
import { CompetitionComponent } from '../../competition/competition.components';
import { AddButtonComponent } from '../../common/add-button/add-button.component';

@Component({
  selector: 'app-home',
  styleUrl: 'home.component.scss',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [CommonModule, CompetitionComponent, AddButtonComponent],
})
class HomeComponent implements OnInit {
  competitions: ICompetition[] = [];
  places = ['st', 'nd', 'rd'];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.competitions = this.homeService.competitions;
  }
}

export { HomeComponent };
