import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

// Pages, Components
import Home from './pages/home/Home';
import { Footer } from './components/Footer';

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);