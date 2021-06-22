import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import AppLayout from '../../src/components/AppLayout';
import CardWrapper from '../../src/components/CardWrapper';
import ChallengesTable from '../../src/components/ChallengesTable';
import Head from '../../src/components/Head';
import PageWrapper from '../../src/components/PageWrapper';
import RanksTable from '../../src/components/RanksTable';
import { apiPaths } from '../../src/constants/apiPath';
import UserCard from '../../src/modules/cw/components/User';
import challengesFetcher from '../../src/modules/cw/fetchers/challengesFetcher';
import statsFetcher from '../../src/modules/cw/fetchers/statsFetcher';
import userFetcher from '../../src/modules/cw/fetchers/userFetcher';
import { Challenge, User, UserRank } from '../../src/modules/cw/utils/types';
import fetchData from '../../src/utils/fetchData';
import fetchInitialData from '../../src/utils/fetchInitialData';
import getCommonAsyncProps from '../../src/utils/getCommonAsyncProps';
import { NAMESPACE } from '../../src/utils/translationNamespaces';
import {
  CommonPageProps,
} from '../../src/utils/types';

const translations = [NAMESPACE.COMMON];

interface UserOverviewProps extends CommonPageProps {
  userInitial?: User;
  challengesInitial?: Challenge[];
  ranksInitial?: UserRank[];
}

const UserOverviewPage: NextPage<UserOverviewProps & {
  }
> = ({
  errorResponse,
  userInitial,
  challengesInitial,
  ranksInitial
}) => {
  const { t } = useTranslation(translations);


  return (
    <PageWrapper
      errorResponse={errorResponse}
    >
      <Head
        title={t("profile.pageTitle", {user: userInitial? userInitial.username : ""})}
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
        <div className="md:flex">
          <CardWrapper width="1/2" additionalClass="mb-6 md:mr-4 rect-gradient">
            <UserCard initialData={userInitial}>
            </UserCard>
          </CardWrapper>
          <CardWrapper width="1/2" additionalClass="mb-6 md:ml-4">
            <RanksTable initialData={ranksInitial}>
            </RanksTable>
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
    ...(await getCommonAsyncProps(ctx, translations)),
    ...(await fetchInitialData(userFetcher)(
      apiPaths.user.getDetails.path(userId),
      'userInitial',
      ctx,
    )),
    ...(await fetchInitialData(statsFetcher)(
      apiPaths.user.getStats.path(userId),
      'ranksInitial',
      ctx,
    )),
    ...(await fetchInitialData(challengesFetcher)(
      apiPaths.user.getChallenges.path(userId),
      'challengesInitial',
      ctx,
    ))
  };
});

export default UserOverviewPage;
