import serializeDate from '../../../utils/serializeDate';
import { Brand, BrandResponse } from '../utils/types';

const brandSerializer = ({
  isFeatured,
  createdAt,
  liked,
  updatedAt,
  foundedYear,
  ...common
}: BrandResponse): Brand => ({
  ...common,
  isFeatured: !!isFeatured,
  liked: !!liked,
  foundedYear: foundedYear ?? null,
  updatedAt: serializeDate(updatedAt),
  createdAt: serializeDate(createdAt),
});

export default brandSerializer;
