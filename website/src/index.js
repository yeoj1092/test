import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Intro from './Intro';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <App></App>

      <Intro name="Jameson" />;
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);


