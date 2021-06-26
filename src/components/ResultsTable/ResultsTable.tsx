import Error from 'next/error';
import Link from 'next/link';
import { FC } from 'react';
import { Board } from '../../modules/cw/utils/types';
import { CommonPageProps } from '../../utils/types';

interface ResultsTableProps extends CommonPageProps {
  data?: Board[];
}

const ResultsTable: FC<ResultsTableProps> = ({
  errorResponse,
  data
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <table className="table-fixed my-6 w-full">
      <thead>
        <tr className="text-cw-gray text-left text-sm py-4 border-b-2 border-b-light-dark">
          <th className="w-1/6 py-4 font-medium">Rank</th>
          <th className="w-2/3 py-4 font-medium">Name</th>
          <th className="w-1/6 py-4 font-medium">Honor</th>
        </tr>
      </thead>
      <tbody className="text-white text-left">
        {data?.map((el: Board) => (
          <Link
            href={`/users/${el.id}`}
            key={el.id}
          >
            <tr className="py-4 border-b-2 border-b-light-dark cursor-pointer">
              <td className="py-4" style={{color: el.rankColor}}>{el.rankName}</td>
              <td className="py-4">{el.name || el.username}</td>
              <td className="font-bold py-4">{el.score}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  
  );
};

export default ResultsTable;
