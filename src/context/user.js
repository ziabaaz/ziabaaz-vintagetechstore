import React, { useState } from "react";

export const UserContext = React.createContext();

function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}

export default function UserProvider({ children }) {
  //   const [user, setUser] = useState({ username: null, token: null });
  const [user, setUser] = useState(getUserFromLocalStorage);

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };

  const [alert, setAlert] = useState({show:false , msg:"" , type:"success"});

  const showAlert = ({msg, type="success"}) =>{
      setAlert({show:true, msg, type});
  }

  const hideAlert = () =>{
      setAlert({...alert, show:false});
  }

  return <UserContext.Provider value={{user, userLogin, userLogout, alert, showAlert, hideAlert}}>{children}</UserContext.Provider>;
}
