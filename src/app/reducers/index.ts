import { combineReducers } from 'redux';
import { RootState } from './state';
import { default as tvshow} from "./tvShowReducer";

export type AppRootState = RootState;
export const rootReducer = combineReducers({
  tvshow
});
  
export default rootReducer;