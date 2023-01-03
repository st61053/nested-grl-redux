import { IDatabaseState } from "./database/types";
import { IPageState } from "./pages/types";
import { ILayoutState } from "./reactGridLayout/types";

interface GlobalState {
  data: AppState;
  layouts: ILayoutState;
  database: IDatabaseState;
  page: IPageState;

}

interface AppState {
  counter: number;
}

interface AppAction {
  type: string;
  layout?: object;
  iterator?: number;
  id?: string;
  page?: IPageState;
}

export { GlobalState, AppAction, AppState };