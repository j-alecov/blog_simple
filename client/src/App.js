import React from 'react';
import './App.css';
import Blogposts from './components/blogposts/Blogposts';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Miss Cellaneous</h1>
      </header>
      <main>
       <Blogposts />
      </main>
    </div>
  );
}

export default App;
