import Error from 'next/error';
import { FC } from 'react';
import { CommonPageProps, FetchCollectionResponse } from '../../utils/types';

interface ResultsTableProps extends CommonPageProps {
  initialResults?: FetchCollectionResponse<any>[];
}

const ResultsTable: FC<CommonPageProps> = ({
  errorResponse,
  initialResults
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <table className="table-fixed my-6 w-full">
      <thead>
        <tr className="text-light-dark text-left text-sm">
          <th className="w-1/6">Rank</th>
          <th className="w-2/3">Name</th>
          <th className="w-1/6">Honor</th>
        </tr>
      </thead>
      <tbody className="text-white text-left">
        <tr>
          <td>Intro to CSS</td>
          <td>Adam</td>
          <td>858</td>
        </tr>
        <tr>
          <td>123123</td>
          <td>Adam</td>
          <td>112</td>
        </tr>
        <tr>
          <td>Intro to JavaScript</td>
          <td>Chris</td>
          <td>1,280</td>
        </tr>
      </tbody>
    </table>
  
  );
};

export default ResultsTable;
