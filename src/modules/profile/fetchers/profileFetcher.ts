import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import { Brand } from '../utils/types';

const profileFetcher = async (
  url?: string,
  context?: GetServerSidePropsContext,
): Promise<Brand> => {
  const { data } = await ajax.get<never, AxiosResponse<Brand>>(
    url,
    getAPICallAuthConfig(context),
  );

  return data;
};

export default profileFetcher;
