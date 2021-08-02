import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from "./seviceWorker";
import { RoomProvider } from './context'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>,
  document.getElementById("root")
);

reportWebVitals();