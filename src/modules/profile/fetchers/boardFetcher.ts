import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import { Board } from '../utils/types';

type BoardFetcherOptions = {
  language?: string;
};

const boardFetcher = async (
  url: string,
  context?: GetServerSidePropsContext,
): Promise<Board[]> => {
  const { data } = await ajax.get<never, AxiosResponse<Board[]>>(
    url,
    getAPICallAuthConfig(context),
  );

  return data;
};

export default boardFetcher;
