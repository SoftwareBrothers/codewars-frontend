import Error from 'next/error';
import { FC } from 'react';
import { UserRank } from '../../modules/cw/utils/types';
import { CommonPageProps } from '../../utils/types';

interface RanksTableProps extends CommonPageProps {
  initialData?: UserRank[];
}

const RanksTable: FC<RanksTableProps> = ({
  errorResponse,
  initialData
}) => {
  if (errorResponse) {
    console.error(`[TL-ERROR] "${errorResponse.url}" ${errorResponse.message}`);

    return <Error statusCode={errorResponse.code} />;
  }

  return (
    <>
      <h2 className="text-white tf-h2">Ranks</h2>
      <table className="table-fixed my-6 w-full">
        <thead>
          <tr>
            <th className="w-1/6"></th>
            <th className="w-1/3"></th>
            <th className="w-1/3"></th>
            <th className="w-1/6"></th>
          </tr>
        </thead>
        <tbody className="text-white text-left">
          {initialData.map((el: UserRank, index: number) => (
            <tr className={`py-4 ${index < initialData.length - 1 ? 'border-b-2 border-b-light-dark' : ''}`}>
              <td className="py-4"><img src={`/images/${el.language.toString().toLowerCase()}.svg`} alt="icon" className="h-6 px-3"/></td>
              <td className="py-4">{el.language}</td>
              <td className="py-4">{el.name}</td>
              <td className="py-4">{el.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RanksTable;
