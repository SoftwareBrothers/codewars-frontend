import { Challenge } from '../utils/types';

const challengeSerializer = ({
  completedDate,
  ...rest
}: Challenge): Challenge => ({
  ...rest,
  completedDate: new Date(completedDate)
});

export default challengeSerializer;
