import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
//local imports
import homeReducer from '../store/reducers/homeSlice';
import IndexSagas from '../store/sagas';
import webReducer from '../store/reducers/webSlice';

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    web: webReducer,
    home: homeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

IndexSagas.forEach((saga) => sagaMiddleware.run(saga));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
