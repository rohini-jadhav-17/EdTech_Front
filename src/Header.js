import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../src/actions/action';
import {logOut} from '../src/Services/AuthService';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [userData, setUserData] = useState({
        username: '',
        userid: '',
        isLoggedIn : false
      })
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const user = useSelector(state => state.MyReducer.user);
    
      useEffect(() => {
        if(user){
          setUserData({ ...userData,
          username: user.firstName+ "" + user.lastName,
          userid: user.id,
          isLoggedIn: user.isLoggedIn
        })
      }    
    }, [user])
      
    const logoutUser = () =>{
      // its important to add id in object format - it will add as headers in http call - it shpuld be in object form
      let userid = {
        "id" : userData.userid
      }
      logOut(userid)
      .then(res => {
        console.log(res.data);
        localStorage.clear();
        dispatch(setUser([]));
        navigate('/login');
      })
      .catch(err => {
        console.log(err)
      })
    }
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">EdTech</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tutorials">Tutorials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add">Add</a>
              </li>   
            </ul>
            <div className="d-flex justify-content-center">
                        {   
                            userData.isLoggedIn ? 
                                <div className='d-flex align-items-center fw-bold text-light'>
                                    <p className='mb-0'>Hello, {userData.username}</p>
                                    <Link to="/cart" className="btn btn-success position-relative py-0">
                                        
                                        <span className="position-absolute top-40 start-70 translate-middle badge rounded-pill bg-warning">
                                             <span className="visually-hidden">cart item</span>
                                        </span>
                                    </Link>
                                    <button onClick={logoutUser} className="btn btn-danger mx-2">Logout</button>
                                </div>
                            : 
                            <div className='btn-group'>
                                <Link to="/login" className="btn btn-success">Login</Link>
                                <Link to="/signup" className="btn btn-success">Sign Up</Link>
                            </div>
                        }
                    </div>
          </div>
        </div>
      </nav>
  )
}

export default Header