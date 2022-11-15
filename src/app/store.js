import { configureStore } from '@reduxjs/toolkit';
import articleReducer from '../features/articles/articlesSlice';
import themeReducer from '../features/theme/themeSlice'
import { apiSlice } from '../features/api/apiSLice';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    theme: themeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(apiSlice.middleware), 
});