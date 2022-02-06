import React, { useRef } from 'react';
import { auth } from './firebase';

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then( (authUser) => {
      console.log(authUser)
    }).catch((err)=>{
      alert(err)
    });
  }

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then( (authUser) => {
      console.log(authUser)
    }).catch((err)=>{
      alert(err)
    });
  }
  return <div className='SignInScreen'>
      <form className='SignInForm'>
          <h1>Sign In</h1>
          <input ref={emailRef} type="email" placeholder='Email' />
          <input ref={passwordRef} type="password" placeholder='Password' />
          <button onClick={signIn} type='submit'>Sign In</button>

          <h4><span className='grayPart'>New to Netflix?</span> <span onClick={register} className='signIn_link'>Sign Up now.</span></h4>
      </form>
  </div>;
}

export default SignInScreen;
