import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  //state management
  const [isAuth, setAuth] = useState(false);
  const [authInfo, setAuthInfo] = useState(null);

  //Context provider
  return (
    <AuthContext.Provider value={[isAuth, setAuth, authInfo, setAuthInfo]}>
      {children}
    </AuthContext.Provider>
  );
}
