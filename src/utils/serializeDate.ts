import { Nullable } from './types';

const serializeDate = (text: string | null): Nullable<number> =>
  text ? Number(new Date(text)) : null;

export default serializeDate;
