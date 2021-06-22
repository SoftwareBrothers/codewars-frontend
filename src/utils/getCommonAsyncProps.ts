import { merge } from 'lodash';
import { GetServerSidePropsContext } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPageProps } from './types';

const getCommonAsyncProps = async (
  ctx: GetServerSidePropsContext,
  translation: string[],
): Promise<CommonPageProps & SSRConfig> => {
  const asyncResources = await Promise.all([
    serverSideTranslations(ctx.locale, translation),
  ]);

  return merge({}, ...asyncResources) as CommonPageProps & SSRConfig;
};

export default getCommonAsyncProps;
