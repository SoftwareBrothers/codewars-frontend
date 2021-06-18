import { AxiosResponse } from 'axios';
import { ServerResponse } from 'http';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import { MAX_INFINITE_PAGE_INIT } from '../constants';
import ajax from './ajax';
import generatePaginatedPath from './generatePaginatedPath';
import getFetcherErrorResponse from './getFetcherErrorResponse';
import parseQueryToString from './parseQueryToString';
import { clientRedirect, serverRedirect } from './redirect';
import { FetchCollectionResponse } from './types';

export interface ListDataConfig<TResponse, TObject> {
  requestUrl: string;
  route: string;
  limit?: number;
  res?: ServerResponse;
  query: ParsedUrlQuery;
  serializer: Serializer<TResponse, TObject>;
  authorize?: boolean;
  infinite?: boolean;
}

export const fetchListData = async <TResponse, TObject>(
  {
    requestUrl,
    res,
    serializer,
    route,
    query,
    limit,
    authorize = false,
    infinite = false,
  }: ListDataConfig<TResponse, TObject>,
  context?: GetServerSidePropsContext,
): Promise<FetchCollectionResponse<TObject>> => {
  const { token } = parseCookies(context);

  const apiUrl = infinite
    ? requestUrl
    : generatePaginatedPath(requestUrl, query, limit);

  const { data } = await ajax.get<
    never,
    AxiosResponse<FetchCollectionResponse<TResponse>>
  >(apiUrl, {
    headers: {
      Accept: 'application/json',
      Authorization: authorize ? `Bearer ${token}` : undefined,
    },
  });

  const { meta, items } = data;

  if (meta.totalPages === 0) {
    return { meta, items: [] };
  }

  if (meta.currentPage > meta.totalPages) {
    const redirectUrl = `${route}?page=${
      meta.totalPages
    }&${parseQueryToString(query, ['page'])}`;
    if (res) {
      serverRedirect(res, redirectUrl);
    } else {
      clientRedirect(redirectUrl);
    }
  }

  return { meta, items: items.map(serializer) };
};

type Serializer<TResponse, TObject> = (rep: TResponse) => TObject;

export interface InitialListDataConfig<TResponse, TObj>
  extends ListDataConfig<TResponse, TObj> {
  key: string;
  context: GetServerSidePropsContext;
}

export const fetchInitialListData = async <TResponse, TObject>(
  config: InitialListDataConfig<TResponse, TObject>,
): Promise<Record<string, unknown>> => {
  try {
    const { key, context, ...rest } = config;

    if (rest.infinite) {
      const responses = [];
      const pageFromQuery = rest.query.page || 1;
      const pageMax =
        pageFromQuery > MAX_INFINITE_PAGE_INIT
          ? MAX_INFINITE_PAGE_INIT
          : pageFromQuery;

      for (let page = 1; page <= pageMax; page++) {
        const initialData = await fetchListData(
          {
            ...rest,
            requestUrl: generatePaginatedPath(
              rest.requestUrl,
              { page: `${page}` },
              rest.limit,
            ),
          },
          context,
        );

        responses.push(initialData);

        if (initialData.meta.totalPages === page) {
          break;
        }
      }

      return { [key]: responses };
    }

    const initialData = await fetchListData(rest, context);

    return { [key]: initialData };
  } catch (error) {
    if (error?.response?.status === 400) {
      serverRedirect(config.res, config.route);
    }

    return { errorResponse: getFetcherErrorResponse(error, config.requestUrl) };
  }
};
