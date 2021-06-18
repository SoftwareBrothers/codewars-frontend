import Error from 'next/error';
import { FC } from 'react';
import { CommonPageProps } from '../../../../utils/types';
import { User } from '../../utils/types';

interface UserProps extends CommonPageProps {
  initialData?: User;
}

const User: FC<UserProps> = ({
  errorResponse,
  initialData
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  if (!initialData) {
    return null;
  }
  return (
    <>
      <div className="flex">
        <h2 className="tf-h2">
        Paweł Lorenc  
        <span>
        3 kyu
        </span>
        </h2>
        
      </div>
    </>
  );
};

export default User;
