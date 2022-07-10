import React from 'react'
import { DataProvider } from './DataContext.jsx'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/App.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <DataProvider>
    <App />
  </DataProvider>,
)
