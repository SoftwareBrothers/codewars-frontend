import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import challengeSerializer from '../serializers/challangeSerializer';
import { Challenge } from '../utils/types';

const challengesFetcher = async (
  url?: string,
  context?: GetServerSidePropsContext,
): Promise<Challenge[]> => {
  const { data } = await ajax.get<never, AxiosResponse<Challenge[]>>(
    url,
    getAPICallAuthConfig(context),
  );

  return data.map((challenge:Challenge) => 
    challengeSerializer(challenge)
  );
};

export default challengesFetcher;
