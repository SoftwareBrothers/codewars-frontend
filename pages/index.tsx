import { useMediaQuery, useTheme } from '@material-ui/core';
import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';  
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
import DayPicker, { DateUtils, RangeModifier } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

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

  const [to, setTo] = useState(undefined);
  const [from, setFrom] = useState(undefined);
  const [datePickerOpened, setDatePickerOpened] = useState(false);

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
  const modifiers = { start: from, end: to };

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, {
      from,
      to
    } as RangeModifier);
    setFrom(range.from);
    setTo(range.to);
    
  }

  const handleResetClick = () => {
    setFrom(undefined);
    setTo(undefined);
    setDatePickerOpened(!datePickerOpened);
  }

  const toggleDatePicker = () => {
    if (datePickerOpened) {
      getNewResults();
    }
    setDatePickerOpened(!datePickerOpened);
  }

  const getNewResults = () => {
    // TO DO
  }
  return (
    <PageWrapper errorResponse={errorResponse}>
      <Head title={t('dashboard.pageTitle')} />
      <AppLayout>
        <div className="w-full py-8 md:py-12">
          <div className="flex justify-between pb-8">
            <h1 className="tf-h1 text-white">Board</h1>
            <div className="border-cw-gray border-solid border-2 rounded p-4 min-w-1/4" >
              <button onClick={toggleDatePicker} className="flex min-w-full text-cw-gray">
                
                <img src="/images/icon-cal.svg" alt="icon" className="h-4 m-auto mr-4"></img> 
                {((!from && !to) || (from && !to)) && 'Date From  –  To'}
                {from &&
                  to &&
                  ` ${from.toLocaleDateString()} -
                      ${to.toLocaleDateString()}`}{' '}
              </button>
            </div>
          </div>
         
          {datePickerOpened && (
            <CardWrapper width="1/2" additionalClass="absolute right-0 border-cw-gray border-solid border-2 z-30 ">
              <DayPicker
                className="Selectable"
                numberOfMonths={1}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={handleDayClick}
              />
              <div className="flex justify-end">
                <button onClick={handleResetClick} className="text-cw-red uppercase min-w-1/4 p-2 mx-2">
                    Cancel
                </button>
                <button onClick={toggleDatePicker} className="bg-cw-red text-white uppercase min-w-1/4 px-10 py-2 rounded mx-2">
                    OK
                </button>
                
              </div>
            </CardWrapper>
          )}
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
