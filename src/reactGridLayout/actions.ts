import { CHANGE_LAYOUT } from "./constants";
import { ILayoutBreakpoints } from "./types";

export const changeLayout = (layout: ILayoutBreakpoints) => ({
    layout,
    type: CHANGE_LAYOUT
  });