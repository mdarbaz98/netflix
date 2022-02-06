import React, { Component, useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Nav.css';

function Nav() {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll',transitionNavBar);
      return () => window.removeEventListener('scroll',transitionNavBar);
    }, []);
    

  return <div className={`Nav ${show && "Nav_black"}`}>
  <div className='navbar'>
      <img onClick={()=>{history.push('/')}} className='netflix-logo' src='./assets/images/580b57fcd9996e24bc43c529.png' alt='netflix-logo' />
      <img onClick={()=>{history.push('/profile')}} className='netflix-avatar' src='./assets/images/flat,1000x1000,075,f.u2.jpg' alt='netflix-account-info-img' />
  </div>
</div>;
}

export default Nav;

