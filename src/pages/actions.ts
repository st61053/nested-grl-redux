import { CHANGE_PAGE } from "./constants";
import { IPageState } from "./types";

export const changePage = (page: IPageState) => ({
  page,
  type: CHANGE_PAGE,
});