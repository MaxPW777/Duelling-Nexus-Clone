import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/main/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Login from './pages/login/Login.tsx'
import DeckEdit from './pages/deckedit/deckedit.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />
        }
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route path='/edit' element={<DeckEdit />}/>
    </Routes>

  </BrowserRouter>
)
