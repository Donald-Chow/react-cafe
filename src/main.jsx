import './index.css';

import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
