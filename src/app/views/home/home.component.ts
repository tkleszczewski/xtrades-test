import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

interface WeeklyChallengeCard {
  place: number;
  avatarUrl: string;
  userFullName: string;
  alerts: number;
  winRate: number;
  yield: number;
  balanceCash: number;
  balancePercentage: number;
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

  weeklyChallengeCards: WeeklyChallengeCard[] = [
    {
      place: 1,
      avatarUrl: '../../../assets/avatar-first.png',
      userFullName: 'Roger Korsgaard',
      alerts: 20,
      winRate: 85,
      yield: 11,
      balanceCash: 7500,
      balancePercentage: 45,
    },
    {
      place: 2,
      avatarUrl: '../../../assets/avatar-second.png',
      userFullName: 'Charlie Herwitz',
      alerts: 20,
      winRate: 85,
      yield: 11,
      balanceCash: 1430,
      balancePercentage: 25,
    },
    {
      place: 3,
      avatarUrl: '../../../assets/avatar-third.png',
      userFullName: 'Ahmad Mango',
      alerts: 20,
      winRate: 85,
      yield: 11,
      balanceCash: -1500,
      balancePercentage: 10,
    },
  ];

  places = ['st', 'nd', 'rd'];
}

export { HomeComponent };
