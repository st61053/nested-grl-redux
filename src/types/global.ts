import { IDatabaseState } from "../database/types";
import { ILayoutState } from "../reactGridLayout/types";

interface GlobalState {
  data: AppState;
  layouts: ILayoutState;
  database: IDatabaseState;

}

interface AppState {
  counter: number;
}

interface AppAction {
  type: string;
  layout?: object;
  iterator?: number;
  id?: string;
}

export { GlobalState, AppAction, AppState };