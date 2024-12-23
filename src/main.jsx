import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import DashBord from './Component/DashBord/DashBord';
import BookDetail from './Component/BookDetail/BookDetail';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader:() => fetch('/booksData.json')
      },
      {
        path: 'listedbook',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'dashbord',
        element:<DashBord></DashBord>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
