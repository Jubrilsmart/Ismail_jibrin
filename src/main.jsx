import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OTPGenerator from './Projects/OTP/OTPGenerator.jsx';
import ErrorPage from './ErrorPage.jsx';
import Board from './Projects/Tic-Tac-Toe/Tic-Tac-Toe.jsx';
import QuoteApp from './Projects/QuoteGen/QuoteApp.jsx';
import ShoppingApp from './Projects/ShoppingList/ShoppingApp.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <ErrorPage />},
  {path: '/pass', element: <OTPGenerator />},
  {path: '/tic-tac-toe', element: <Board />},
  {path: '/quote', element: <QuoteApp />},
  {path: '/shopping', element: <ShoppingApp />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
