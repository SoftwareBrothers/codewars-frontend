import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import userSerializer from '../serializers/userSerializer';
import { User } from '../utils/types';

const userFetcher = async (
  url?: string,
  context?: GetServerSidePropsContext,
): Promise<User> => {
  const { data } = await ajax.get<never, AxiosResponse<User>>(
    url,
    await getAPICallAuthConfig(context),
  );
  return userSerializer(data);
};

export default userFetcher;
