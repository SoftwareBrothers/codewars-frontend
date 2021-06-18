import { Media, Nullable } from '../../../utils/types';

interface BrandBase {
  id: number;
  name: string;
  location: Nullable<string>;
  description: Nullable<string>;
  about: Nullable<string>;
  logo: Nullable<Media>;
  backgroundImage: Nullable<Media>;
  images: Media[];
  instagram: Nullable<string>;
  twitter: Nullable<string>;
  facebook: Nullable<string>;
  youtube: Nullable<string>;
  website: Nullable<string>;
}

export interface Brand extends BrandBase {
  createdAt: Nullable<number>;
  updatedAt: Nullable<number>;
  foundedYear: Nullable<number>;
  isFeatured: boolean;
  likeCount: number;
  liked: boolean;
}

export interface BrandResponse extends BrandBase {
  isFeatured: Nullable<boolean>;
  liked: Nullable<boolean>;
  likeCount: number;
  createdAt: Nullable<string>;
  updatedAt: Nullable<string>;
  foundedYear: Nullable<number>;
}


export interface Board {
  name: string;
  rank: Nullable<string>;
  score: Nullable<number>;
}

export interface BrandResponse extends Board {
}