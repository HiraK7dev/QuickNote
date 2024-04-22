import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Help from './pages/Help.jsx'
import About from './pages/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NoteContext } from './context/NoteContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/help',
    element: <Help />
  },
  {
    path: '/about',
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteContext>
      <RouterProvider router={router} />
    </NoteContext>
  </React.StrictMode>,
)
