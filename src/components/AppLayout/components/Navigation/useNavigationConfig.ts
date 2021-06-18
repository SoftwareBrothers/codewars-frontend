import { useTranslation } from 'next-i18next';
import {
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
} from '../../../../constants/routes';
import { NAMESPACE } from '../../../../utils/translationNamespaces';

interface Config {
  label: string;
  href: string;
}

const useNavigationConfig = (): Config[] => {
  const { t } = useTranslation(NAMESPACE.COMMON);

  return [
    {
      label: t('navigation.home'),
      href: DASHBOARD_ROUTE,
    },
    {
      label: t('navigation.discovery'),
      href: PROFILE_ROUTE,
    },
  ];
};

export default useNavigationConfig;
