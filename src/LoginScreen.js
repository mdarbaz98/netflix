import React, { useState } from 'react';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';
import './SignInScreen.css';
function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

  return <div className='LoginScreen'>
      <div className='LoginScreen_background'>
          <img className='Netflix_logo' src='./assets/images/580b57fcd9996e24bc43c529.png' alt='netflix_logo' />
          <button onClick={()=> setSignIn(true)} className='SignInButton'>Sign In</button>
          <div className='Gradient'>
          </div>
          <div className='LoginScreenBody'>
                {signIn ?
                <SignInScreen />:
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere, Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or request your membership.</h3>
                    <div className='Login_input'>
                        <form className='LoginForm'>
                            <input type="email" placeholder='Email Address' />
                            <button onClick={() => setSignIn(true)} className='Get_started_button'>GET STARTED</button>
                        </form>
                    </div>
                </>}
          </div>
      </div>
  </div>;
}

export default LoginScreen;
