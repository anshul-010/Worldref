import React, { useContext, useState } from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom'
import { MyContext } from '../Context/MyContextProvider '
import { useNavigate } from "react-router-dom";
let initialData = {
    email: "",
    password: "",
  };

export const Login = () => {
  const [data, setData] = useState(initialData);

    const {userData,setIsAuth} = useContext(MyContext)
    const navigate = useNavigate();

    function handleChange(e){
        const {name,value} = e.target
        setData((pre)=>{
            return {...pre, [name]: value}
        })
      }

    function handleLogin(e){
        e.preventDefault()
        for(let i=0; i<userData.length; i++){
            if(userData[i].email==data.email && userData[i].password==data.password){
                setIsAuth(true)
                navigate("/");
                return
            }
        }
        
        alert("login failed")
    }

  return (
    <div className='log-box'>
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='email' value={data.email} name='email' onChange={handleChange} required />
            <br />
            <input type="text" placeholder='password' value={data.password} name='password' onChange={handleChange} required />
            <br />
            <button>Login</button>
            <p>Don't have account <Link to="/signup"><span>Sign up</span></Link></p>
        </form>
    </div>
  )
}
