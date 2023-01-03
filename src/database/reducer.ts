import { AppAction } from '../types/global';
import { CHANGE_NESTED_LAYOUT } from './constants';
import { IDatabaseState } from './types';

const defaultState: IDatabaseState = {
    rglContents: [
        {
            i: "a",
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
            i: "b",
            nested: {
                id: 2,
                type: "nested",
                layout: {
                    lg: [
                        { i: 'u', w: 6, h: 4, x: 0, y: 3, moved: false, static: false },
                        { i: 'v', w: 6, h: 6, x: 6, y: 0, moved: false, static: false },
                        { i: 'x', w: 6, h: 2, x: 0, y: 0, moved: false, static: false },
                        { i: 'y', w: 12, h: 3, x: 0, y: 8, moved: false, static: false },
                    ]
                }
            }
        },
        {
            i: "c",
            text: "React-grid-layout"
        },
        {
            i: "d",
            nested: {
                id: 3,
                type: "nested",
                layout: {
                    lg: [
                        { i: 'k', w: 3, h: 2, x: 0, y: 0, moved: false, static: false },
                        { i: 'l', w: 3, h: 2, x: 3, y: 0, moved: false, static: false },
                    ]
                }
            }
        },
        {
            i: "k",
            text: "Sample"
        },
        {
            i: "l",
            text: "Text"
        },
        {
            i: "u",
            chart: {
                chart: {
                    type: "spline"
                },
                title: {
                    text: "My chart 2"
                },
                series: [
                    { data: [1, 2, 1, 4, 3, 6] }
                ]
            }
        },
        {
            i: "v",
            chart: {
                chart: {
                    type: "spline"
                },
                title: {
                    text: "My chart 3"
                },
                series: [
                    { data: [1, 5, 1, 5, 1] }
                ]
            }
        },
        {
            i: "x",
            text: "Nested RGL"
        },
        {
            i: "y",
            chart: {
                chart: {
                    type: "spline"
                },
                title: {
                    text: "My chart 4"
                },
                series: [
                    { data: [1, 2, 1, 4, 3, 6] }
                ]
            }
        },

    ]
};

export const databaseReducer = (state: IDatabaseState = defaultState, action: AppAction) => {
    switch (action.type) {
        case CHANGE_NESTED_LAYOUT:
            return {
                ...state,
                rglContents: state.rglContents.map((item) => item.i === action.id ? ({
                    ...item,
                    nested: {
                        ...item.nested,
                        layout: action.layout
                    }
                }) : ({ ...item }))
            };
        default: return state;
    }
};