import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Logo from "../components/NavigationBar/Logo";
import {
  getCustomers,
  logCustomerIn,
  setCurrentCustomer,
  setLoggedInFalse,
} from "../redux/customerSlice/customerSlice";

function SignInPage() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const customers = useSelector((state) => state.customer.items);
  const loggedIn = useSelector((state) => state.customer.loggedIn);
 
  useEffect(() => {
    if (loggedIn) {
      customers.forEach((customer) => {
        if (customer.email == email) {
          dispatch(setCurrentCustomer(customer));
        }
      });
      
      history.push("/")
      dispatch(setLoggedInFalse())
    }
  }, [loggedIn]);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  function submitHandler() {
    dispatch(logCustomerIn({ email: email, password: password }));
    
  }

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <div className="signinpage">
        <div
          style={{
            background: "#C3073F",
            width: "100%",
            height: "4.5rem",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <Logo></Logo>
        </div>
        <div style={{ padding: 50 }}>
          <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
            Email
          </h4>
          <input
            autoComplete="false"
            autoCapitalize="false"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "3em",
              padding: 20,
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          ></input>
          <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
            Password
          </h4>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "3em",
              padding: 20,
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          ></input>

          <button onClick={submitHandler} className="signinbutton">
            Sign In
          </button>

          <p
            style={{
              color: "white",
              opacity: "80%",
              letterSpacing: "1px",
              fontSize: 16,
              marginTop: 40,
            }}
          >
            If you haven’t activated your account yet, please check your email
            and use the activation code
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default SignInPage;
