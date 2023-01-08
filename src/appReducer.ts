import { combineReducers } from 'redux';
import { databaseReducer } from './database/reducer';
import { pageReducer } from './pages/reducer';

export declare type partialReducer = (partialStore: object) => object;

export const createAppReducer = () => {
  return combineReducers({
    database: databaseReducer,
    page: pageReducer,
  });
};
