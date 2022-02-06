import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./userSlice";
import Profilepage from "./Profilepage";
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else{
        // logout
        dispatch(logout());
      }
    });

    return unsubscribe;
  },[dispatch])

  return (
    <div className="App">
      <Router>
      {!user ?
      <LoginScreen />:
      <Switch>
      <Route path="/profile" exact>
            <Profilepage />
          </Route>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </Switch>}
      </Router>
    </div>
  );
}

export default App;
