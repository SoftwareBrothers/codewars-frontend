import { ParsedUrlQuery } from 'querystring';

const parseQueryToString = (
  query: ParsedUrlQuery,
  exclude: string[] = [],
): string => {
  const queryKeysArray = Object.keys(query);

  const filteredKeys = queryKeysArray.filter((key) => !exclude?.includes(key));

  return filteredKeys.reduce(
    (acc, key) =>
      acc.length ? `${acc}&${key}=${query[key]}` : `${key}=${query[key]}`,
    '',
  );
};

export default parseQueryToString;
