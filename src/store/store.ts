import rootReducer from './root-reducer';
import { configureStore, Middleware as ReduxMiddleware } from '@reduxjs/toolkit';
import rootSaga from './root.Saga';
import { rootSagaMiddleware, } from './root.Saga';
import { SagaMiddleware } from 'redux-saga';
import { loggerMiddleware } from './middlewares/logger.middleware';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Use AsyncStorage for React Native

// Configuring AsyncStorage for redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,  // Use AsyncStorage instead of createWebStorage
  whitelist: ['login'],   // Persist only the `login` slice
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware setup: Redux Saga + custom logger middleware
const middleware: Array<SagaMiddleware | ReduxMiddleware> = [
  rootSagaMiddleware,
  loggerMiddleware,
];

// Configure Redux store with persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable checks for Sagas
    }).prepend(middleware), // Prepend custom middleware
});

// Run the root saga
rootSagaMiddleware.run(rootSaga);

// Types for store and dispatch
export type AppStoreType = typeof store;
export type AppDispatch = typeof store.dispatch;

// Create the persistor
export const persistor = persistStore(store);
