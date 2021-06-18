import { AxiosResponse } from 'axios';
import { GetServerSidePropsContext } from 'next';
import ajax from '../../../utils/ajax';
import getAPICallAuthConfig from '../../../utils/getAPICallAuthConfig';
import brandSerializer from '../serializers/brandSerializer';
import { Brand, BrandResponse } from '../utils/types';

const brandSpotlightFetcher = async (
  url: string,
  context?: GetServerSidePropsContext,
): Promise<Brand[]> => {
  const { data } = await ajax.get<never, AxiosResponse<BrandResponse[]>>(
    url,
    getAPICallAuthConfig(context),
  );

  return data.map(brandSerializer);
};

export default brandSpotlightFetcher;
