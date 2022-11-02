import React, { useContext } from 'react';
import { RootContext } from './context/RootContext';
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Layout from './layout/Layout'
import Home from './components/Home/Home'
function App(props) {
      const {user} = useContext(RootContext)

  const router = createBrowserRouter([
            {
              path: "/",
              element: <Layout> </Layout>,
              children:[
                {
                  path:"",
                  element:<Home> </Home>
                }
              ]
            } 
  ])

  return (
    <div>
       

    <RouterProvider router={router} />     
    </div>
  );
}

export default App;