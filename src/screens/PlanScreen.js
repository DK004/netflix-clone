import React from 'react'
import "./PlanScreen.css"
import StripeCheckout from "react-stripe-checkout";
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';


function PlanScreen() {
    const user = useSelector(selectUser);
 


    const Plan = (props)=>{
        return(
        <div className="planScreen_plans">
                <div className="planScreen_info">
                    <h5>{props.name}</h5>
                    <h6>{props.quality} </h6>
                </div>
                <input type="radio" name="plan" value={props.rValue}  />
        </div>
        )

    }


    function handleToken(token){
        console.log(token);

    }
    return (
        <div className ="planScreen">
        <form>
        <Plan 
            name = "Basic"
            quality = "480p"
            rValue = "6.99"
        />
            
            <Plan 
            name = "Standard"
            quality = "1080p"
            rValue = "7.99"
        />

<Plan 
            name = "Premium"
            quality = "4K + HDR"
            rValue = "8.99"
        />
            
         
            </form>

                <StripeCheckout
                stripeKey="pk_test_51JD99pSCEAc3gEiNQwvB29VjBhsrlXGbGT4Petd4OJu9FZRpdUcJVtGa0LCuT0S0x3Q1xDiFJWaZm5YAdeGB0t0I00bxayi8M6"
                token={handleToken}
                name="Standard"
                email={user.email}
                style={{
                    borderRadius:"none"
                }}
                
                 />
        </div>
    )
}

export default PlanScreen
