import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import AppLayout from '../../src/components/AppLayout';
import CardWrapper from '../../src/components/CardWrapper';
import ChallengesTable from '../../src/components/ChallengesTable';
import Head from '../../src/components/Head';
import PageWrapper from '../../src/components/PageWrapper';
import { apiPaths } from '../../src/constants/apiPath';
import userFetcher from '../../src/modules/profile/fetchers/userFetcher';
import { Challenge, User } from '../../src/modules/profile/utils/types';
import fetchData from '../../src/utils/fetchData';
import fetchInitialData from '../../src/utils/fetchInitialData';
import { NAMESPACE } from '../../src/utils/translationNamespaces';
import {
  CommonPageProps,
} from '../../src/utils/types';

const translations = [NAMESPACE.COMMON, NAMESPACE.PROFILE];

interface UserOverviewProps extends CommonPageProps {
  userInitial?: User;
  challengesInitial?: Challenge[];
}

const UserOverviewPage: NextPage<UserOverviewProps & {
  }
> = ({
  errorResponse,
  userInitial,
  challengesInitial = [{
    name: "test",
    rank: "123",
    language: "javascript",
    finishedDate: new Date(),
  }]
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
        <div className="w-full py-8 md:py-12 flex">
          <Link href="/">
            <div className="rectangle mr-4">
              <img src="/images/back-arrow.svg" alt="icon"></img>  
            </div>
          </Link>
          <h1 className="tf-h1 text-white">Profile</h1>
        </div>
        <div className="flex">
          <CardWrapper width="1/2" additionalClass="mb-6 md:mr-4">
            123
          </CardWrapper>
          <CardWrapper width="1/2" additionalClass="mb-6 md:ml-4">
            Test 2
          </CardWrapper>
        </div>
        <CardWrapper additionalClass="md:mt-2">
          <ChallengesTable initialData={challengesInitial}>

          </ChallengesTable>
        </CardWrapper>
      </AppLayout>
    </PageWrapper>
  );
};

export const getServerSideProps = fetchData(async (ctx) => {
  const { query } = ctx;
  const userId = parseInt(query.userId as string, 10);
  return {
    ...(await fetchInitialData(userFetcher)(
      apiPaths.user.getDetails.path(userId),
      'userInitial',
      ctx,
    ))
  };
});

export default UserOverviewPage;
