import React, { useContext, useState } from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/MyContextProvider ";

let initialData = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const Signup = () => {
  const [data, setData] = useState(initialData);
  const {addNewUser} = useContext(MyContext)
  function handleChange(e){
    const {name,value} = e.target
    setData((pre)=>{
        return {...pre, [name]: value}
    })
  }
  
  function handleSubmit(e){
    e.preventDefault()
    if(data.password!==data.confirmPassword){
        alert("passwords not matching")
    }
    else{
        addNewUser(data)
        setData(initialData)
        alert("sign up successfully")
    }
  }

  return (
    <div className="log-box">
      <h2>Sigh Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" value={data.email} name="email" onChange={handleChange} required />
        <br />
        <input type="text" placeholder="password" value={data.password} name="password" onChange={handleChange} required />
        <br />
        <input type="text" placeholder="confirm password" value={data.confirmPassword} name="confirmPassword" onChange={handleChange} required />
        <br />
        <button>Sign Up</button>
        <p>
          Already have account{" "}
          <Link to="/login">
            <span>Login here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
