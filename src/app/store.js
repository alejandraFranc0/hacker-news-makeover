import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articlesSlice';
import themeReducer from '../features/theme/themeSlice'
import { apiSlice } from '../features/api/apiSLice';
import throttle from 'lodash.throttle';

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    return undefined;
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    theme: themeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    persistedState,
  },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(apiSlice.middleware),
});

store.subscribe(throttle(() => {
  saveState({
    articles: { ...store.getState().articles }
  });
}, 1000));