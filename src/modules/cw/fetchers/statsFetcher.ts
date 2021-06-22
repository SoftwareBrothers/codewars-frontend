import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import challengeSerializer from '../serializers/challangeSerializer';
import { Rank } from '../utils/types';

const statsFetcher = async (
  url?: string,
  context?: GetServerSidePropsContext,
): Promise<Rank[]> => {
  const { data } = await ajax.get<never, AxiosResponse<Rank[]>>(
    url,
    await getAPICallAuthConfig(context),
  );

  return data
};

export default statsFetcher;
