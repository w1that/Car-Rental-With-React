import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function SignIn() {
  return (
    <div>
      <Link to="/signin"> <Button
        className="naviButton"
        style={{ marginRight: 15, backgroundColor: "#F2F2F2", color: "black" }}
      >
        Sign In
      </Button></Link>
    </div>
  );
}

export default SignIn;
