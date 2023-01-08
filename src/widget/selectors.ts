import { createSelector } from "reselect";
import { GlobalState } from "../global";
import Widget from "./components/Widget";

export const getWidget = (desktopId: number,layoutId: string) =>
  createSelector(
    (state: GlobalState) => state.database.desktops,
    (desktops) => desktops.find(desktop => desktop.id === desktopId).widgets.find(widget => widget.layoutId === layoutId));