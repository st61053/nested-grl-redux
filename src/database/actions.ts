import { ILayoutBreakpoints } from "../reactGridLayout/types";
import { CHANGE_NESTED_LAYOUT } from "./constants";

export const changeNestedLayout = (layout: ILayoutBreakpoints, id: string) => ({
    layout,
    id,
    type: CHANGE_NESTED_LAYOUT
  });