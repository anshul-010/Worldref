import React, { createContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();
    function addNewUser(user){
        setUserData([...userData,user])
        setIsAuth(true)
        navigate("/");
    }

    

  return (
    <MyContext.Provider value={{ userData,addNewUser,isAuth,setIsAuth }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
