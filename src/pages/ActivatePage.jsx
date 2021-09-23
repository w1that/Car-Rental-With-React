import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { activateCustomer } from '../redux/customerSlice/customerSlice';
function ActivatePage() {
    let successMessage ='Successfully activated. Enjoy renting cars!'
    let errorMessage = 'Something gone wrong. Please try again.'
    const history = useHistory()
    const dispatch = useDispatch()
    const [activationCode, setActivationCode] = useState('')
    const customer = useSelector(state => state.customer.currentCustomer)

    function checkHandler(){
        if(activationCode===customer.activationCode){
            toast.success(successMessage)
            dispatch(activateCustomer(customer))
            history.push("/")
        }
        else{
            toast.warning(errorMessage)
        }
    }
   
    
    return (
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div className="activateBox">
          <div
            style={{
              background: "#C3073F",
              width: "100%",
              height: "4.5rem",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <h3 style={{color:"white", padding:"1em"}}>ACTIVATE YOUR ACCOUNT</h3>
          </div>
          
          <div style={{ padding: 50 }}>
            <h4 style={{ fontSize: 20, color: "white" }}>
              Enter the activation code
            </h4>
            <input
              autoComplete="false"
              autoCapitalize="false"
              onChange={(e)=>setActivationCode(e.target.value)}
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "3em",
                padding: 20,
                letterSpacing: 2,
                fontWeight: "bold",
              }}
            ></input>
            
  
            <button onClick={checkHandler} className="activateeButton">
              Activate
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
              If you haven’t get any yet, please check your spam box and try 2-3 minutes later
            </p>
          </div>
        </div>
      </div>
    )
}

export default ActivatePage
