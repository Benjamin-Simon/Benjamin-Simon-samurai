import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
