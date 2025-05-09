import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import Enterprise from './routes/Enterprise.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/contato", element: <Contact />},
      {path: "/empresa", element: <Enterprise/>},

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
