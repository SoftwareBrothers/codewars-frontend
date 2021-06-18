
export enum Size {
  Sm = 'sm',
  Md = 'md',
}

export interface Activable {
  active?: boolean;
}

export interface Disabled {
  disabled?: boolean;
}

export interface Colorable {
  color?: string;
}

export interface IconProps {
  className?: string;
}

export interface Linkable {
  href: string;
}

export interface Dimensions {
  width?: string;
  height?: string;
}

export type TranslateFunction = (s: string) => string;

export interface ErrorResponse {
  code: number;
  url: string;
  message: string;
}

export interface CommonPageProps {
  errorResponse?: ErrorResponse;
}

export interface Media {
  s3Key: string;
  filename: string;
  mimeType: string;
  path: string;
}

export type Nullable<T> = T | null;

export interface Meta {
  currentPage: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
}

export interface FetchCollectionResponse<TObject> {
  meta: Meta;
  items: TObject[];
}
