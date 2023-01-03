import { AppAction } from '../global';
import { CHANGE_LAYOUT } from './constants';
import { ILayoutState } from './types';

const defaultState: ILayoutState = {
    id: 1,
    type: "initial",
    layout: {
      lg: [
        { i: 'a', w: 6, h: 6, x: 0, y: 3, moved: false, static: false },
        { i: 'b', w: 6, h: 10, x: 6, y: 0, moved: false, static: false },
        { i: 'c', w: 6, h: 4, x: 0, y: 0, moved: false, static: false },
        { i: 'd', w: 12, h: 4, x: 0, y: 8, moved: false, static: false },
      ]
    }
};

export const reactGridLayoutReducer = (state: ILayoutState = defaultState, action: AppAction) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.layout
      };
    default: return state;
  }
};