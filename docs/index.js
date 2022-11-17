import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/app/store';
import ArticleList from '../src/features/articles/articleList';
import App from '../src/App';
import './src/index.css';


const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter(
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