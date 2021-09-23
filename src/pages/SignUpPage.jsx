import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Logo from "../components/NavigationBar/Logo";
import { sendActivationCode } from "../redux/customerSlice/customerSlice";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const activationCodeSentMessage = useSelector(
    (state) => state.customer.activationCodeSentMessage
  );

  useEffect(() => {
    if (activationCodeSentMessage.length > 1) {
      toast(activationCodeSentMessage);
    }
  }, [activationCodeSentMessage]);

  function submitHandler() {
    dispatch(
      sendActivationCode({
        email: email,
        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        password: password,
      })
    );
  }

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <div className="signuppage">
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 25,
            }}
          >
            <div>
              <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                First Name
              </h4>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                style={{
                  borderRadius: "5px",
                  height: "3em",
                  padding: 20,
                  letterSpacing: 2,
                  fontWeight: "bold",
                }}
              ></input>
            </div>

            <div>
              <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
                Last Name
              </h4>
              <input
                onChange={(e) => setLastName(e.target.value)}
                style={{
                  borderRadius: "5px",
                  height: "3em",
                  padding: 20,
                  letterSpacing: 2,
                  fontWeight: "bold",
                }}
              ></input>
            </div>
          </div>

          <h4 style={{ textAlign: "left", fontSize: 20, color: "white" }}>
            Company Name
          </h4>
          <input
            onChange={(e) => setCompanyName(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "3em",
              padding: 20,
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          ></input>
          <p
            style={{
              color: "white",
              opacity: "80%",
              letterSpacing: "1px",
              fontSize: 16,
              marginTop: 20,
            }}
          >
            I read and agree to the terms and conditions
          </p>

          <button onClick={submitHandler} className="signinbutton">
            Sign Up
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
            Activate your account for being able to rent a car. Check your email
            after registration
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
