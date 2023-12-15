import { Injectable } from '@angular/core';

export interface Image {
  src: string;
  alt: string;
}

export interface IPodiumCard {
  place: number;
  avatarUrl: string;
  userFullName: string;
  isUserVerified: boolean;
  alerts: number;
  winRate: number;
  yield: number;
  balanceCash: number;
  balancePercentage: number;
}

export interface IUserDetails {
  avatarUrl: string;
  userFullName: string;
  userNickname: string;
  bitsPrize: number;
}

export interface ICompetition {
  userImages: Image[];
  dateOfExpiration: number;
  heading: string;
  podiumCards: IPodiumCard[];
  userDetails: IUserDetails;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  weeklyChallengesCompetition: ICompetition = {
    dateOfExpiration: Date.now() - 2.5 * 24 * 60 * 60 * 1000,
    heading: 'Weekly Challenges',
    userDetails: {
      avatarUrl: '../../../assets/user-details-avatar.png',
      userFullName: 'Roger Korsgaard',
      userNickname: 'rog13k',
      bitsPrize: 20000,
    },
    userImages: [
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
    ],
    podiumCards: [
      {
        place: 1,
        avatarUrl: '../../../assets/avatar-first.png',
        isUserVerified: true,
        userFullName: 'Roger Korsgaard',
        alerts: 20,
        winRate: 85,
        yield: 11,
        balanceCash: 7500,
        balancePercentage: 0.45,
      },
      {
        place: 2,
        avatarUrl: '../../../assets/avatar-second.png',
        isUserVerified: true,
        userFullName: 'Charlie Herwitz',
        alerts: 20,
        winRate: 85,
        yield: 11,
        balanceCash: 1430,
        balancePercentage: 0.25,
      },
      {
        place: 3,
        avatarUrl: '../../../assets/avatar-third.png',
        userFullName: 'Ahmad Mango',
        isUserVerified: false,
        alerts: 20,
        winRate: 85,
        yield: 11,
        balanceCash: -1500,
        balancePercentage: 0.1,
      },
    ],
  };
  doubleGainWeekContestCompetition: ICompetition = {
    dateOfExpiration: Date.now() + 2.5 * 24 * 60 * 60 * 1000,
    heading: 'Double Gain Week Contest',
    userDetails: {
      avatarUrl: '../../../assets/user-details-avatar.png',
      userFullName: 'Roger Korsgaard',
      userNickname: 'rog13k',
      bitsPrize: 15000,
    },
    userImages: [
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
    ],
    podiumCards: [
      {
        place: 1,
        avatarUrl: '../../../assets/avatar-fourth.png',
        isUserVerified: true,
        userFullName: 'Zain Mango',
        alerts: 20,
        winRate: 85,
        yield: 11,
        balanceCash: 7500,
        balancePercentage: 0.45,
      },
      {
        place: 2,
        avatarUrl: '../../../assets/avatar-second.png',
        isUserVerified: false,
        userFullName: 'Charlie Herwitz',
        alerts: 20,
        winRate: 85,
        yield: 11,
        balanceCash: 1430,
        balancePercentage: 0.25,
      },
      {
        place: 3,
        avatarUrl: '../../../assets/avatar-third.png',
        isUserVerified: true,
        userFullName: 'Ahmad Mango',
        alerts: 20,
        winRate: 85,
        yield: 11,
        balanceCash: -1500,
        balancePercentage: 0.1,
      },
    ],
  };
  competitions: ICompetition[] = [
    this.weeklyChallengesCompetition,
    this.doubleGainWeekContestCompetition,
  ];
}
