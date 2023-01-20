import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Front from './components/Front';
import Recetas from './components/Recetas';

function App() {
  return (
    <div>
      <Front />
      <Recetas />
      <Footer />
    </div>
  );
}

export default App;
