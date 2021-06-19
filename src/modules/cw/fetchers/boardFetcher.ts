import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import { BoardResponse } from '../utils/types';

const boardFetcher = async (
  url: string,
  context?: GetServerSidePropsContext,
): Promise<BoardResponse> => {
  const { data } = await ajax.get<never, AxiosResponse<BoardResponse>>(
    url,
    getAPICallAuthConfig(context),
  );

  return data;
};

export default boardFetcher;
