import { combineReducers } from 'redux';
import { unitReducer } from './unitReducers';

export const rootReducer = combineReducers({
  units: unitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
