import { ServerResponse } from 'http';
import Router from 'next/router';

export const serverRedirect = (
  res: ServerResponse,
  url: string,
  statusCode = 302,
): void => {
  res.writeHead(statusCode, { Location: url });
};

export const clientRedirect = (url: string): void => {
  Router.push(url);
};
