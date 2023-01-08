import { CHANGE_LAYOUT } from "./constants";
import { ILayoutBreakpoints } from "./types";

export const changeLayout = (desktopId: number, layout: ILayoutBreakpoints) => ({
	desktopId,
	layout,
	type: CHANGE_LAYOUT
});