import React from 'react';
import { useOutlet } from 'react-router-dom';
import ArticleList from './features/articles/articleList';
import { useSelector } from 'react-redux';
import Header from './Header';
function App() {
  const Outlet = useOutlet();
  const theme = useSelector(state => state.theme.getTheme);

  return (
    <div className='App header-border ' data-theme={theme}>
      <Header/>
      { Outlet ?? <ArticleList/>}
    </div>
   
  );
}

export default App;
