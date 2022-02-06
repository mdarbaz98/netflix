import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import Nav from './Nav';
import './Profilepage.css';
import { selectUser } from './userSlice';
function Profilepage() {
    const user = useSelector(selectUser)
  return <div className='profilePage'>
        <Nav />
     <img className='profile-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnqdc6oMUMq8X5Wx5hw5o7tgT2mfv8YgbUw&usqp=CAU" alt='profile-image' />
     <h2>{user.email}</h2>
     <button onClick={()=> {auth.signOut()}} className='logout-button'>Logout</button>
  </div>;
}

export default Profilepage;
