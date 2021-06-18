import { ParsedUrlQuery } from 'querystring';

const defaultQueryParams = {
  page: 1,
};

const generatePaginatedPath = (
  url: string,
  query: ParsedUrlQuery = {},
  limit = 20,
): string => {
  const { page } = { ...defaultQueryParams, ...query };

  const path = url.split('?')[0];

  const urlWithMandatoryParams = `${path}?limit=${limit}&page=${page}`;

  const optionalParams = [
    query.search && `search=${encodeURIComponent(query.search as string)}`,
    query.sortBy && `sortBy=${encodeURIComponent(query.sortBy as string)}`,
    query.sortOrder &&
      `sortOrder=${encodeURIComponent(query.sortOrder as string)}`,
    query.status && `status=${encodeURIComponent(query.status as string)}`,
    query.statuses &&
      `statuses=${encodeURIComponent(query.statuses as string)}`,
  ]
    .filter(Boolean)
    .join('&');

  return `${urlWithMandatoryParams}${
    optionalParams.length ? `&${optionalParams}` : ''
  }`;
};

export default generatePaginatedPath;
