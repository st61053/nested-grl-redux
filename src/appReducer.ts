import { combineReducers } from 'redux';
import { databaseReducer } from './database/reducer';
import { reactGridLayoutReducer } from './reactGridLayout/reducer';
import { dataReducer } from './reducers/app-reducer';

export declare type partialReducer = (partialStore: object) => object;

export const createAppReducer = () => {
  return combineReducers({
    data: dataReducer,
    layouts: reactGridLayoutReducer,
    database: databaseReducer
  });
};
