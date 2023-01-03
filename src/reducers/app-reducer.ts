import { INCREASE_COUNTER } from '../constants/exampleConstants';
import { AppAction, AppState } from '../types/global';

const defaultState: AppState = {
  counter: 0
};

export const dataReducer =
(state: AppState = defaultState, action: AppAction) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.iterator
      };
    default: return state;
  }
};
