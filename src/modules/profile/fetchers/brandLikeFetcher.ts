import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import { apiPaths } from '../../../constants/apiPath';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import { Brand } from '../utils/types';

type BrandFetcherOptions = {
  id: number;
};

const brandFetcher = async (
  options?: BrandFetcherOptions,
  context?: GetServerSidePropsContext,
): Promise<Brand> => {
  const { id } = options;
  const { data } = await ajax.get<never, AxiosResponse<Brand>>(
    apiPaths.brands.getDetails.path(id),
    getAPICallAuthConfig(context),
  );

  return data;
};

export default brandFetcher;
