import { Nullable } from '../../../utils/types';


export interface Board {
  name: string;
  rank: Nullable<string>;
  score: Nullable<number>;
}

export interface BrandResponse extends Board {
}

export interface User {
  id: number;
  username: string;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  createdAt: Nullable<Date>;
  updatedAt: Nullable<Date>;
}


export interface Challenge {
  name: string;
  rank: Nullable<string>;
  finishedDate: Nullable<Date>;
  language: Nullable<string>;
}

export interface Rank {
  name: Nullable<string>;
  language: Nullable<string>;
}

export interface UserRank extends Rank {
  score: Nullable<number>;
}