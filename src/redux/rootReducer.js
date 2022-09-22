import { combineReducers } from 'redux';
import { productionReducer } from './reducers/productionReducer';
import { workersReducer } from './reducers/staffReducer';

export const rootReducer = combineReducers({ productionReducer, workersReducer });