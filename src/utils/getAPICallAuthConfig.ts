import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

const getAPICallAuthConfig = (
  context?: GetServerSidePropsContext,
): { headers: { Authorization: string } } | Record<string, never> => {
  const { token } = parseCookies(context);

  if (!token) {
    return {};
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default getAPICallAuthConfig;
