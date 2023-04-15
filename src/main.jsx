import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/layout/Main';
import OrderReview from './component/orderReview/OrderReview';
import Contact from './component/contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path: 'review',
        element: <OrderReview></OrderReview>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
