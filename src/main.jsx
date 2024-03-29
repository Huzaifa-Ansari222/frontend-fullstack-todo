import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/app.scss'
import { createContext } from 'react'

export const server="https://task-log-1jzm.onrender.com/api/v1";

export const Context = createContext({isAuthenticated: false});

const AppWrapper = () =>{

const [isAuthenticated,setIsAuthenticated] =useState(false);
const [loading,setLoading]=useState(false);
const [user,setUser]=useState({});

  return (
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      loading,
      setLoading,
      user,
      setUser,
    }}>
    <div style={{height:'100vh' ,display:'flex',flexDirection:'column'}}>
    <App />
    </div>
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>
);
