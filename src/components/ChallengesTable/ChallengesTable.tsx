import Error from 'next/error';
import Link from 'next/link';
import { FC } from 'react';
import { Challenge } from '../../modules/profile/utils/types';
import { CommonPageProps } from '../../utils/types';
import { format } from 'date-fns';

interface ChallengesTableProps extends CommonPageProps {
  initialData?: Challenge[];
}

const ChallengesTable: FC<ChallengesTableProps> = ({
  errorResponse,
  initialData
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <>
      <h2 className="text-white tf-h2">Challenges</h2>
      <table className="table-fixed my-6 w-full">
        <thead>
          <tr className="text-light-dark text-left text-sm py-4 border-b-2 border-b-light-dark">
            <th className="w-1/6 py-4 font-medium">Rank</th>
            <th className="w-1/3 py-4 font-medium">Name</th>
            <th className="w-1/3 py-4 font-medium">Completed Language</th>
            <th className="w-1/6 py-4 font-medium">Finished Date</th>
          </tr>
        </thead>
        <tbody className="text-white text-left">
          {initialData.map((el: Challenge) => (
            <tr className="py-4 border-b-2 border-b-light-dark">
              <td className="py-4">{el.rank}</td>
              <td className="py-4">{el.name}</td>
              <td className="py-4"><img src={`/images/${el.language.toString().toLowerCase()}.svg`} alt="icon" className="h-6 px-3"/></td>
              <td className="py-4">{format(el.finishedDate,'dd.MM.yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ChallengesTable;
