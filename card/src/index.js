import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card';
import { movies } from "./movies";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card movie={movies}/>
  </React.StrictMode>
);
