import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser,login} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";


function App() {

  const user = useSelector(selectUser);
  



  const  dispatch = useDispatch();
  
  useEffect(() => {
    
    const unsubscribe =  auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Logged in
        // console.log(userAuth);
        dispatch(login({
          uid : userAuth.uid,
          email :userAuth.email
        }))
      }else{
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
    // eslint-disable-next-line 
  }, [dispatch])

  return (
    <div className="app">

      <Router>
  {
    !user?(
      <LoginScreen/>
    ):(
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        <Route exact path="/profile">
          <ProfileScreen />
        </Route>
        </Switch>
    )
  }
      </Router>
    </div>
  );
}

export default App;
