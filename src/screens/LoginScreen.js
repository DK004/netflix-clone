import React , { useState } from 'react'
import "./LoginScreen.css"
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {

const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
        <div className="loginScreen_background">
            <img className="loginScreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>
            <button className="loginScreen_button" onClick={()=> setSignIn(true)}>Sign in</button>

            <div className="loginScreen_gradient"/>
        </div>
            
           <div className="loginScreen_body">
           {
               signIn?(
                   <SignUpScreen />
               ):(
           <>
               <h1>Unlimited films, TV programmes and more.</h1>
               <h2>Watch anywhere. Cancle at anytime.</h2>
               <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
               <div className="loginScreen_input">
                   <form>
                       <input type="email" placeholder="Email Address" />
                       <button className="loginScreen_getStarted" onClick={()=>setSignIn(true)}>
                           Get Started
                       </button>
                   </form>
               </div>
           </>

               )
           }
           </div>
        </div>
    )
}


export default LoginScreen
