import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <Error />, 
  children: [
    { path: '/', element: <Home /> },
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
