import { useMediaQuery, useTheme } from '@material-ui/core';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect } from 'react';
import AppLayout from '../src/components/AppLayout';
import CardWrapper from '../src/components/CardWrapper';
import Head from '../src/components/Head';
import PageWrapper from '../src/components/PageWrapper';
import ResultsTable from '../src/components/ResultsTable';
import { Tab, Tabs } from '../src/components/Tabs';
import { apiPaths } from '../src/constants/apiPath';
import boardFetcher from '../src/modules/profile/fetchers/boardFetcher';
import { Board } from '../src/modules/profile/utils/types';
import fetchData from '../src/utils/fetchData';
import fetchInitialData from '../src/utils/fetchInitialData';
import { NAMESPACE } from '../src/utils/translationNamespaces';
import { CommonPageProps } from '../src/utils/types';

const translations = [NAMESPACE.COMMON];

const TABS = ["General", "JavaScript", "TypeScript"];

interface DashboardProps extends CommonPageProps {
  boardInitial?: Board[];
}

const DashboardPage: NextPage<DashboardProps & {
}> = ({
  errorResponse,
  boardInitial
}) => {
  const { t } = useTranslation(translations);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { push, pathname, query } = useRouter();
  const tab = query.activeTab;

  useEffect(() => {
    if (!tab) {
      push({ pathname, query: { activeTab: "General" } }, undefined, {
        shallow: true,
      });
    }
  }, [pathname, push, tab]);

  const handleTabSelect = async (_: ChangeEvent, selectedTab: string) => {
    await push({ pathname, query: { activeTab: selectedTab } }, undefined, {
      shallow: true,
    });
  };

  return (
    <PageWrapper errorResponse={errorResponse}>
      <Head title={t('dashboard.pageTitle')} />
      <AppLayout>
        <div className="w-full py-8 md:py-12">
          <h1 className="tf-h1 text-white pb-8">Board</h1>
          <CardWrapper>
            <Tabs value={tab} onChange={handleTabSelect} centered={isMobile}>
              {TABS.map((tab) => (
                <Tab key={tab} value={tab} label={t(tab)} />
              ))}
            </Tabs>
            <ResultsTable initialData={boardInitial}/>
          </CardWrapper>
        </div>
      </AppLayout>
    </PageWrapper>
  );
};


export const getServerSideProps = fetchData(async (ctx) => {
  const { query } = ctx;

  return {
    ...(await fetchInitialData(boardFetcher)(
      apiPaths.board.getDetails.path,
      'boardInitial',
      ctx,
    )),
  };
});

export default DashboardPage;
