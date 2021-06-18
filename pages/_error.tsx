import { NextPage, NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';

interface MyErrorProps extends ErrorProps {
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

const MyError: NextPage<MyErrorProps> = ({
  statusCode,
}) => {
  return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async ({ res, err }: NextPageContext) => {
  const errorInitialProps: MyErrorProps = await NextErrorComponent.getInitialProps(
    {
      res,
      err,
    } as NextPageContext,
  );

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;
 
  return errorInitialProps;
};

export default MyError;
