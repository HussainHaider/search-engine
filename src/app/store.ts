import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
//local imports
import counterReducer from '../store/counterSlice';
import IndexSagas from '../store/sagas';

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

IndexSagas.forEach((saga) => sagaMiddleware.run(saga));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
