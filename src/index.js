import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ArticleList from './features/articles/articleList';
import App from './App';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='starred' element={<ArticleList />} />
      <Route index path='latest' element={<ArticleList />} />
    </Route>
  )
)

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
