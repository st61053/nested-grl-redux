import { createSelector } from "reselect";
import { GlobalState } from "../types/global";

export const getContent = (id: string) =>
  createSelector(
    (state: GlobalState) => state.database.rglContents,
    (contents) => contents.find(content => content.i === id));