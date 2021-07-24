import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";
import { userData } from "./Data";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = (e) => {
    dispatch(logout());
  };

  return (
    <form className="logout">
      
      <h1>
        Welcome <span className="user__name">{user.name}</span>!
      </h1>
      <h1 className="user_name">Dashboard</h1>
      <table>
      <tr>
                <th >name</th>
                <th>age</th>
                <th >phone no</th>
                <th >gender</th>
                <th >email</th>
            </tr>
         

        {

        userData.map((userdata)=>  <tr key={userdata.id}><td>{userdata.name} </td><td>{userdata.age}</td><td>{ userdata.phoneNo}</td><td>{ userdata.gender}</td> <td>{userdata.email}</td></tr>)
      }
     
        </table>
      
      <button className="logout__button" onClick={(e) => logout(e)}>
        Log out
      </button>
    </form>
  );
};

export default Logout;
