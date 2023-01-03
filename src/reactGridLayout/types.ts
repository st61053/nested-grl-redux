export interface ILayoutState {
id: number;
type: string;
layout: ILayoutBreakpoints;
}

export interface ILayoutBreakpoints {
    lg: ILayout[];
    md?: ILayout[];
    sm?: ILayout[];
    xs?: ILayout[];
    xxs?: ILayout[];
}

interface ILayout {
    i: string;
    w: number;
    h: number;
    x: number;
    y: number;
    moved?: boolean;
    static?: boolean;
    minH?: number;
}
