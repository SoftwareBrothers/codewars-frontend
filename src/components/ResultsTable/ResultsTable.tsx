import Error from 'next/error';
import { FC } from 'react';
import { Board } from '../../modules/profile/utils/types';
import { CommonPageProps } from '../../utils/types';

interface ResultsTableProps extends CommonPageProps {
  initialData?: Board[];
}

const ResultsTable: FC<ResultsTableProps> = ({
  errorResponse,
  initialData
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <table className="table-fixed my-6 w-full">
      <thead>
        <tr className="text-light-dark text-left text-sm py-4 border-b-2 border-b-light-dark">
          <th className="w-1/6 py-4">Rank</th>
          <th className="w-2/3 py-4">Name</th>
          <th className="w-1/6 py-4">Honor</th>
        </tr>
      </thead>
      <tbody className="text-white text-left">
        {initialData.map((el: Board) => (
          <tr className="py-4 border-b-2 border-b-light-dark">
            <td className="py-4">{el.rank}</td>
            <td className="py-4">{el.name}</td>
            <td className="font-bold py-4">{el.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  
  );
};

export default ResultsTable;
