import Error from 'next/error';
import { FC } from 'react';
import { CommonPageProps } from '../../utils/types';

const PageWrapper: FC<CommonPageProps> = ({
  errorResponse,
  children,
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <>
      {children}
    </>
  );
};

export default PageWrapper;
