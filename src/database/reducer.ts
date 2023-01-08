import Desktop from '../desktop/components/Desktop';
import { CHANGE_LAYOUT } from '../desktop/constants';
import { AppAction } from '../global';
import { IDatabaseState } from './types';

const defaultState: IDatabaseState = {
  desktops: [
    {
      id: 1,
      name: "default",
      layout: {
        lg: [
          { i: 'a', w: 6, h: 6, x: 0, y: 3, moved: false, static: false },
          { i: 'b', w: 6, h: 10, x: 6, y: 0, moved: false, static: false },
          { i: 'c', w: 6, h: 4, x: 0, y: 0, moved: false, static: false },
          { i: 'd', w: 12, h: 4, x: 0, y: 8, moved: false, static: false },
        ],
        md: [
          { i: 'a', w: 12, h: 6, x: 0, y: 3, moved: false, static: false },
          { i: 'b', w: 12, h: 10, x: 6, y: 0, moved: false, static: false },
          { i: 'c', w: 12, h: 4, x: 0, y: 0, moved: false, static: false },
          { i: 'd', w: 12, h: 4, x: 0, y: 8, moved: false, static: false },
        ]
      },
      widgets: [
        {
          layoutId: "a",
          chart: {
            chart: {
              type: "spline"
            },
            title: {
              text: "My chart"
            },
            series: [
              { data: [1, 2, 1, 4, 3, 6] }
            ]
          }
        },
        {
          layoutId: "d",
          chart: {
            chart: {
              type: "spline"
            },
            title: {
              text: "My chart"
            },
            series: [
              { data: [1, 2, 1, 4, 3, 6] }
            ]
          }
        }
      ]
    }
  ]

};

export const databaseReducer = (state: IDatabaseState = defaultState, action: AppAction) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        desktops: state.desktops.map((desktop) => desktop.id === action.desktopId ? ({
          ...desktop,
          layout: action.layout
        }) : ({ ...desktop }))
      }

    // case CHANGE_NESTED_LAYOUT:
    //     return {
    //         ...state,
    //         rglContents: state.rglContents.map((item) => item.i === action.id ? ({
    //             ...item,
    //             nested: {
    //                 ...item.nested,
    //                 layout: action.layout
    //             }
    //         }) : ({ ...item }))
    //     };
    default: return state;
  }
};