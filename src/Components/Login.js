import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {logIn} from '../Services/AuthService';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/action';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states
  const [signInDetails, setSignInDetails] = useState({
    email: '',
    password: ''
  });

  // destructuring
  const { email, password } = signInDetails;

  // when user navigate to login page when he is already login
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('edtech-user');
    if(isLoggedIn){
      navigate('/profile');
    }    
  }, []);

  // hndle values of form element
  const handleChange = key => e =>{
    setSignInDetails({ ...signInDetails, [key]: e.target.value});
  }
  
  // login
  const submitLogin = e =>{
    e.preventDefault();
    if(email === '' || password ===''){
      alert('Please fill all the fields!!');
      return;
    }
    let data = {
      email,
      password
    }
    logIn(data)
    .then(res => {
      localStorage.setItem('edtech-user', JSON.stringify(res.data));
      dispatch(setUser(res.data));
      navigate('/home');
    })
    .catch(err =>{
      console.log(err);
    })
  }
  return (
    <div className='container align-items-center'>
    <div className="card border-primary">
        <div className="card-body">
            <h5 className="card-title text-center mt-2 mb-4"><strong>Login EdTech Account</strong></h5>
            <form onSubmit={submitLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email id</label>
                    <input 
                        type="email" 
                        className="form-control"
                        placeholder='Enter Email id'
                        value={email}
                        onChange={handleChange('email')}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder='Enter Password' 
                        value={password}
                        onChange={handleChange('password')}/>
                </div>                
                <button type="submit" className="btn btn-primary mt-2 w-100">Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login