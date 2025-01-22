import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    // Define your global state here
    user: null,
    isAuthenticated: false,
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
