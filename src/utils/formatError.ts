import { useTranslation } from 'next-i18next';
import { FieldError } from 'react-hook-form';

enum ErrorType {
  MinLength = 'minLength',
  Pattern = 'pattern',
}

const ERROR_TYPE_USING_MESSAGES = [ErrorType.Pattern, ErrorType.MinLength];

interface UseFormError {
  format: (error?: FieldError) => string | undefined;
}

const useFormatError = (): UseFormError => {
  const { t } = useTranslation('validation');

  const format = (error?: FieldError) => {
    if (!error) {
      return undefined;
    }

    if (ERROR_TYPE_USING_MESSAGES.includes(error?.type as ErrorType)) {
      return error.message;
    }

    return t([error.type, 'defaultError']);
  };

  return {
    format,
  };
};

export default useFormatError;
