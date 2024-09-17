import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import './index.scss'

console.log('Main.jsx is running');

const root = document.getElementById('root');
console.log('Root element:', root);

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  )
  console.log('Render completed');
} else {
  console.error('Root element not found');
}