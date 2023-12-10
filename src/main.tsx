// Importing React and ReactDOM from the appropriate locations
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importing the main App component and the associated CSS file
import App from './App'
import './index.css'

// Using createRoot to render the App component into the root element
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Wrapping the App component in React.StrictMode for additional checks during development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
