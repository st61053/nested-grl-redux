import { createSelector } from "reselect";
import { GlobalState } from "../global";

export const getDesktop = (id: number) =>
  createSelector(
    (state: GlobalState) => state.database.desktops,
    (desktops) => desktops.find(desktop => desktop.id === id));