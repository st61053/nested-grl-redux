export interface IWidget {
    layoutId: string;
    card?: string;
    chart?: IChart;
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