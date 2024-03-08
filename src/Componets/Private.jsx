import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContextProvider '
import { Navigate } from "react-router-dom";

export const Private = ({children}) => {
    const {isAuth} = useContext(MyContext)
    if(!isAuth){
        return <Navigate to="/login" />;
    }
  return children
}
