import { Component, Input } from '@angular/core';
import { IPodiumCard } from '../../views/home/home.service';
import { CommonModule } from '@angular/common';
import { BalancePipe } from '../../pipes/balance.pipe';

@Component({
  selector: 'competition-podium-card',
  templateUrl: 'podium-card.component.html',
  styleUrl: 'podium-card.component.scss',
  standalone: true,
  imports: [CommonModule, BalancePipe],
})
class CompetitionPodiumCard {
  @Input()
  podiumCard: IPodiumCard = {
    alerts: 0,
    avatarUrl: '',
    balanceCash: 0,
    balancePercentage: 0,
    isUserVerified: false,
    place: 1,
    userFullName: '',
    winRate: 0,
    yield: 0,
  };

  @Input()
  places: string[] = [];
}

export { CompetitionPodiumCard };
