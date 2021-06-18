import Error from 'next/error';
import { FC } from 'react';
import { CommonPageProps } from '../../utils/types';

interface CardWrapperProps extends CommonPageProps {
  width?: string;
  additionalClass?: string;
}

const CardWrapper: FC<CardWrapperProps> = ({
  errorResponse,
  children,
  width = "full",
  additionalClass,
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <div className={`bg-dark w-full md:w-${width} rounded-2xl p-4 md:p-10 ${additionalClass}`}>
      {children}
    </div>
  );
};

export default CardWrapper;
