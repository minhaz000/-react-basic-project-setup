import React, { useContext } from 'react';
import { RootContext } from './context/RootContext';
import {RouterProvider} from "react-router-dom";
import router from './Routes/Routes'
function App(props) {
      const {user} = useContext(RootContext)

  

  return (
    <div>
       

    <RouterProvider router={router} />     
    </div>
  );
}

export default App;