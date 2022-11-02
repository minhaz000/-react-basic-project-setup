import React, { createContext } from 'react';

const RootContext = createContext()
function Context(props) {


  const  RootContextValue = { user:" minhaz" }

  return (
  <RootContext.Provider value={RootContextValue}> 
    {props.children}
  </RootContext.Provider>
  );
}
export {RootContext} 
export default Context;