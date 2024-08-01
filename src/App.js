// src/App.js
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
