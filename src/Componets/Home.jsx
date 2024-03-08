import React, { useContext, useState } from 'react'
import data from "../db.json"
import { Card } from './Card'
import "../Styles/Home.css"
import { MyContext } from '../Context/MyContextProvider '
export const Home = () => {
  const [products] = useState(data.Products)
  const {isAuth,setIsAuth} = useContext(MyContext)

  function handleLogout(){
    setIsAuth(false)
  }

  return (<>
      <div className='heading'><h1 className='heading-text'>Home</h1><h1 onClick={handleLogout} className='heading-text'>{isAuth?"Logout":"Login"}</h1></div>
    <div className='container'>
      {products?.map((ele)=><Card item={ele} key={ele.id}/>)}
    </div></>
  )
}
