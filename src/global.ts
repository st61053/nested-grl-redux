import { IDatabaseState } from "./database/types";
import { IPageState } from "./pages/types";

interface GlobalState {
  data: AppState;
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
  desktopId: number;
}

export { GlobalState, AppAction, AppState };