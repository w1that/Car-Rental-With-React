import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserShort from "./UserShort";

function NavigationBar() {
  const customer = useSelector(state => state.customer.currentCustomer)
  return (
    <div>
      <div
        style={{
          background: "#4E4E50",
          borderRadius: "0px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Logo></Logo>
        <Route exact path="/">
        <SearchBar></SearchBar>
        </Route>
        {customer && customer.email==='admin' &&
        <Link to="/add-car"><button className="customizedButton addCarButton">add car</button></Link>
        }
        
      <Route exact path="/">
       {customer?<UserShort customer={customer}></UserShort>:<div style={{ display: "flex" }}>
       
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>}
        </Route>
        
      </div>
    </div>
  );
}

export default NavigationBar;
