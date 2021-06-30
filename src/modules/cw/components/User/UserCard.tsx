import Error from 'next/error';
import { FC } from 'react';
import Link from 'next/link';
import { CommonPageProps } from '../../../../utils/types';
import { User } from '../../utils/types';

interface UserProps extends CommonPageProps {
  initialData?: User;
}

const UserCard: FC<UserProps> = ({
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
        <div className="w-full md:h-full md:w-3/4">
          <div className="border-b-2 border-cw-red pb-6">
            <h2 className="tf-h2 text-white">
              {initialData.name || initialData.username} 
              <span className="ml-4">
              3 kyu
              </span>
            </h2>
            <Link
                href={`https://www.codewars.com/users/` + initialData.username}
                >
              <div className="flex my-3 w-2/3 bg-dark-orange bg-opacity-10 p-2 rounded cursor-pointer">
                <img src="/images/logo-cw-red.jpg" alt="icon" className="h-6 pr-2" />
                <span className="text-dark-orange ml-2 text-s">Codewars profile</span>
              </div>
            </Link>
           
          </div>
          <div className="flex mt-6">
            <div className="block w-1/2">
              <h3 className="tf-h3 text-white">
                {initialData.honor}
              </h3>
              <p className="text-cw-gray text-xs">
                Honor
              </p>
            </div>
            <div className="block w-1/2">
              <h3 className="tf-h3 text-white">
                {initialData.leaderboardPosition}
              </h3>
              <p className="text-cw-gray text-xs">
                Leaderboard position
              </p>
            </div>
          </div>
          
        </div>
        <div className="hidden md:w-1/4 md:block relative">
          <img src="/images/user.svg" alt="user" className="h-full absolute -right-10 -bottom-10" />
        </div>
      </div>
    </>
  );
};

export default UserCard;
