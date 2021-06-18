import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import React from 'react';
import AppLayout from '../../src/components/AppLayout';
import Head from '../../src/components/Head';
import PageWrapper from '../../src/components/PageWrapper';
import { apiPaths } from '../../src/constants/apiPath';
import profileFetcher from '../../src/modules/profile/fetchers/profileFetcher';
import fetchData from '../../src/utils/fetchData';
import fetchInitialData from '../../src/utils/fetchInitialData';
import { NAMESPACE } from '../../src/utils/translationNamespaces';
import {
  CommonPageProps,
} from '../../src/utils/types';

const translations = [NAMESPACE.COMMON, NAMESPACE.PROFILE];


const ProfileOverviewPage: NextPage<
  CommonPageProps & {
  }
> = ({
  errorResponse,
}) => {
  const { t } = useTranslation(translations);


  return (
    <PageWrapper
      errorResponse={errorResponse}
    >
      <Head
        title={t(`${NAMESPACE.PROFILE}:pageTitle`)}
      />
      <AppLayout
        >
      </AppLayout>
    </PageWrapper>
  );
};
//@typescript-eslint/no-unused-vars
export const getServerSideProps = fetchData(async (ctx) => {
  const { query } = ctx;
  const id = parseInt(query.id as string, 10);

  return {
    ...(await fetchInitialData(profileFetcher)(
      apiPaths.profile.getDetails.path(id),
      'profile',
      ctx,
    ))
  };
});

export default ProfileOverviewPage;
