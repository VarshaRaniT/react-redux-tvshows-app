import { Store, createStore, applyMiddleware } from 'redux';
import { rootReducer, AppRootState } from './../reducers';
import { logger, thunk } from './../middleware';

export function configureStore(initialState?: AppRootState): Store<AppRootState> {
  let middleware = applyMiddleware(thunk, logger);

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<AppRootState>;
  return store;
}
