import { CHANGE_PAGE } from "./constants";
import { AppAction } from "../global";
import { IPageState } from "./types";

const defaultState: IPageState = {
  name: "Přehled",
  path: "/",
  tree: [],
};

export const pageReducer = (state: IPageState = defaultState, action: AppAction) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        name: action.page.name,
        path: action.page.path,
        tree: action.page.tree,
      };
    default:
      return state;
  }
};