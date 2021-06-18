import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useSWRInfinite } from 'swr';
import InfiniteGrid from '../../../../components/InfiniteGrid';
import LogoTile from '../../../../components/LogoTile';
import { apiPaths } from '../../../../constants/apiPath';
import { BRAND_ROUTE, PANTRY_ROUTE } from '../../../../constants/routes';
import { fetchListData } from '../../../../utils/fetchListData';
import { FetchCollectionResponse } from '../../../../utils/types';
import brandSerializer from '../../serializers/brandSerializer';
import { Brand, BrandResponse } from '../../utils/types';

interface BrandTilesProps {
  initialData: FetchCollectionResponse<Brand>[];
}

const getKey = (
  pageIndex: number,
  previousPageData: FetchCollectionResponse<Brand>,
) => {
  const nextPage = previousPageData?.meta?.currentPage || 0;
  const limit = previousPageData?.meta?.perPage || 18;
  const lastPage = nextPage === previousPageData?.meta?.totalPages;

  return lastPage
    ? null
    : `${apiPaths.brands.getLiked.path({ page: nextPage + 1, limit })}`;
};

const BrandTiles: FC<BrandTilesProps> = ({ initialData }) => {
  const { query } = useRouter();

  const { data, setSize } = useSWRInfinite(
    getKey,
    (url) => {
      return fetchListData<BrandResponse, Brand>({
        serializer: brandSerializer,
        route: PANTRY_ROUTE,
        requestUrl: url,
        query,
        authorize: true,
        infinite: true,
      });
    },
    {
      initialData: initialData,
      initialSize: +query.page || 1,
    },
  );

  const renderItem = ({ name, logo, id }: Brand) => (
    <LogoTile name={name} image={logo?.path} url={`${BRAND_ROUTE}/${id}`} />
  );

  return (
    <InfiniteGrid<Brand>
      data={data}
      setSize={setSize}
      renderItem={renderItem}
    />
  );
};

export default BrandTiles;
