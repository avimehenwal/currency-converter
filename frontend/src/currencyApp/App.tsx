import React from 'react';
import './App.css';
import { Card } from './component/Card'

function App() {
  return (
    <div className="container center">
      <header >
        <h1>Currency Converter App</h1>
      </header>
      <main>
        <Card />
      </main>
      <footer>
        <h6>built with love by avi</h6>
      </footer>
    </div>
  );
}

export default App;
