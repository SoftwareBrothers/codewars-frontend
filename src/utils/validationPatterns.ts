import { TranslateFunction } from './types';

export const getEmailValidation = (
  t: TranslateFunction,
): { value: RegExp; message: string } => ({
  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: t('validation:invalidEmail'),
});
