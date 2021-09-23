import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { clearActivationMessage, logCustomerOut, setActivationCodeSentFalse } from "../../redux/customerSlice/customerSlice";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { getAll } from "../../redux/rentalSlice/rentalSlice";
function UserShort({ customer }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll())
}, [])
const history = useHistory()
  function logOutHandler(){
    dispatch(setActivationCodeSentFalse())
    dispatch(logCustomerOut())
    toast.dark("Successfully logged out")
  }
  return (
    <div>
      <Dropdown
        text={`${customer.firstName} ${customer.lastName}`}
        icon="user circle outline"
        floating
        labeled
        button
        className="icon"
        style={{
          background: "#1A1A1D",
          color: "white",
          fontSize: 16,
          borderRadius: 6,
          width: "13em",
        }}
      >
        <Dropdown.Menu>
          {customer.email!=='admin' &&<Dropdown.Item
          onClick={()=>history.push(`/profile/${customer.email}`)}
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Profile
          </Dropdown.Item>
          }

          {customer.email!=='admin'&&<Dropdown.Item
          onClick={()=>history.push(`/rental-history/${customer.id}`)}
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            My Rental History
          </Dropdown.Item>}
          {!customer.activated ? (
            <Dropdown.Item
              className="activateButton"
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                letterSpacing: "1px",
                background: "#f2bc18",
              }}
            >
             <Link style={{color:"white"}} to="/activate"> Activate Account</Link>
            </Dropdown.Item>
          ) : (
            ""
          )}
          <Dropdown.Item
            onClick={logOutHandler}
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Log Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default UserShort;
