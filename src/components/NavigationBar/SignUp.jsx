import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function SignUp() {
  return (
    <div>
      <Link to="/signup"><Button
        className="naviButton"
        style={{ backgroundColor: "#C3073F", color: "white" }}
      >
        Sign Up
      </Button></Link>
    </div>
  );
}

export default SignUp;
