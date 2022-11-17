import React from 'react';
import { useOutlet } from 'react-router-dom';
import ArticleList from './features/articles/articleList';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer'
function App() {
  const Outlet = useOutlet();
  const theme = useSelector(state => state.theme.getTheme);

  return (
    <div className='App' data-theme={theme}>
      <Header />
      {Outlet ?? <ArticleList />}
      <Footer />
    </div>

  );
}

export default App;
