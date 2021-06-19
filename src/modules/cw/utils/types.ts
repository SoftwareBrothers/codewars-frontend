import { Nullable } from '../../../utils/types';


export interface Board {
  id: number;
  name: string;
  username: string;
  rank: Nullable<string>;
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
  createdAt: Nullable<Date>;
  updatedAt: Nullable<Date>;
}


export interface Challenge {
  name: string;
  rankName: Nullable<string>;
  rankColor: Nullable<string>;
  description: Nullable<string>;
  url: Nullable<string>;
  completedDate: Nullable<Date>;
  completedLanguages: Nullable<string[]>;
}

export interface Rank {
  name: Nullable<string>;
  language: Nullable<string>;
}

export interface UserRank extends Rank {
  score: Nullable<number>;
}