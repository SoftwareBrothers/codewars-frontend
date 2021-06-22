import { User } from '../utils/types';

const userSerializer = ({
  ...rest
}: User): User => ({
  ...rest,
});

export default userSerializer;
