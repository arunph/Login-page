import React, { useState } from "react";
import "./Login.css";

import { login, logout } from "../features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")

  const details={
    "username":"hruday@gmail.com",
    "password":'hruday123'
  }

  

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name===details.username && password===details.password){   
       dispatch(
      login({
        name: details.username,
        loggedIn: true,
      })
    );
    setPassword("");}
    else{
      setError("invalid credentials")
    }

  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>{error}</h1>
        
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
