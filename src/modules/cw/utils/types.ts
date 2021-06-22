import { Nullable } from '../../../utils/types';


export interface Board {
  id: number;
  name: string;
  username: string;
  rankName: Nullable<string>;
  rankColor: Nullable<string>;
  score: Nullable<number>;
}

export interface BoardResponse {
  items: Board[];
}

export interface User {
  id: number;
  username: string;
  name: Nullable<string>;
  honor: Nullable<number>;
  clan: Nullable<string>;
  leaderboardPosition: Nullable<number>;
  createdAt: Nullable<string>;
  updatedAt: Nullable<string>;
}


export interface Challenge {
  name: string;
  rankName: Nullable<string>;
  rankColor: Nullable<string>;
  description: Nullable<string>;
  url: Nullable<string>;
  completedDate: Nullable<string>;
  completedLanguages: Nullable<string[]>;
}

export interface Rank {
  rankName: Nullable<string>;
  language: Nullable<string>;
  rank: Nullable<number>;
  rankColor: Nullable<string>;
}

export interface UserRank extends Rank {
  score: Nullable<number>;
  userId: Nullable<number>;
  date: Nullable<string>;
}