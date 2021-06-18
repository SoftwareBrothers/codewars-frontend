import { GetServerSidePropsContext } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const translationGroups = ['common'];

type FetchData<T = any> = (
  ctx?: GetServerSidePropsContext,
) => Promise<SSRConfig & T>;


const fetchData = <T = any>(fetch?: FetchData<T>) => async (
  ctx: GetServerSidePropsContext,
): Promise<any> => {
  try {

    const props = fetch ? await fetch(ctx) : {};

    return {
      props,
    };
  } catch (e) {

    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, translationGroups)),
      },
    };
  }
};

export default fetchData;
