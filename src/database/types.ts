import { ILayoutState } from "../reactGridLayout/types";

export interface IDatabaseState {
    rglContents: IContent[];
}

export interface IContent {
    i: string;
    number?: number;
    text?: string;
    chart?: IChart;
    nested?: ILayoutState
}

interface IChart {
    chart: {
        type: string;
    },
    title: {
        text: string;
    },
    series: data[];
}

interface data {
    data: number[] | string[]
}