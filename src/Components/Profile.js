import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  // consuming user state using useSelector
  const user = useSelector(state => state.MyReducer.user);
//   destructuring
  const { firstName, lastName, email, password, role} = user;
  console.log(user)
  
  return (
    <div>{firstName}</div>
  )
}

export default Profile