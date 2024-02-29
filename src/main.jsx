import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/app.scss'

export const server='https://task-log-1jzm.onrender.com/api/v1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
