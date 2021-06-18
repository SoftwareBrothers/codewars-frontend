import { Nullable } from '../../../utils/types';


export interface Board {
  name: string;
  rank: Nullable<string>;
  score: Nullable<number>;
}

export interface BrandResponse extends Board {
}

export interface User {

}


export interface Challenge {
  name: string;
  rank: Nullable<string>;
  finishedDate: Nullable<Date>;
  language: Nullable<string>;
}