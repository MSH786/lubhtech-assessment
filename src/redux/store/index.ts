import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {persistReducer, persistStore} from "redux-persist";

import {rootSaga} from "../saga";
import rootReducer from "../reducers";
import {persistConfig} from "../persist";

export default function configureStore(initialState: IInitialStates | any) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return {store, persistor};
}
