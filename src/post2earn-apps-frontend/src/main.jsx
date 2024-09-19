import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'
console.log('Main.jsx is running');

const root = document.getElementById('root');
console.log('Root element:', root);

if (root) {
  ReactDOM.createRoot(root).render(
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  )
  console.log('Render completed');
} else {
  console.error('Root element not found');
}