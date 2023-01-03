import { INCREASE_COUNTER } from '../constants/exampleConstants';

export const increaseCounter = (iterator: number) => ({
  iterator,
  type: INCREASE_COUNTER
});
