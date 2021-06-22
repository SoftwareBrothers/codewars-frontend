import { Challenge } from '../utils/types';

const challengeSerializer = ({
  ...rest
}: Challenge): Challenge => ({
  ...rest,
});

export default challengeSerializer;
