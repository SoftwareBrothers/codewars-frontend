import { GetServerSidePropsContext } from 'next';
import getFetcherErrorResponse from './getFetcherErrorResponse';
import { ErrorResponse } from './types';

export const fetchInitialData = <TData>(
  fetcher: (url: string, context?: GetServerSidePropsContext) => Promise<TData>,
) => async (
  url: string,
  key: string,
  context?: GetServerSidePropsContext,
): Promise<Record<string, TData> | { errorResponse: ErrorResponse }> => {
  try {
    const initialData = await fetcher(process.env.API_URL + url, context);

    return { [key]: initialData };
  } catch (error) {
    return { errorResponse: getFetcherErrorResponse(error, url) };
  }
};

export default fetchInitialData;
