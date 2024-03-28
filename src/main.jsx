import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import BookDetails from './components/BookDetails';
import Home from './components/Home';
import Error from './components/Error';
import ListedBooks from './components/listedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead';
import ReadBooks from './components/listedBooks/ReadBooks';
import WishListBooks from './components/listedBooks/WishListBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/books.json')
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/readBooks',
        element: <ReadBooks></ReadBooks>
      },
      {
        path: '/wishListBooks',
        element: <WishListBooks></WishListBooks>
      }
    ]
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


