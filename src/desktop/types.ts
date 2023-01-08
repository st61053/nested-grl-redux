import { IWidget } from "../widget/types";

export interface IDesktopsState {
    id: number;
    name: string;
    layout: ILayoutBreakpoints;
    widgets?: IWidget[];
    }
    
    export interface ILayoutBreakpoints {
        lg: ILayout[];
        md?: ILayout[];
        sm?: ILayout[];
    }
    
    interface ILayout {
        i: string;
        w: number;
        h: number;
        x: number;
        y: number;
        minH?: number;
        maxH?: number;
        minW?: number;
        maxW?: number;
        moved?: boolean;
        static?: boolean;
        isDraggable?: boolean;
    }

