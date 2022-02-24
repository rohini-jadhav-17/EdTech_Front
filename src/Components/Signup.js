import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  {signUp}  from '../Services/AuthService';

const Signup = () => {
// navigate
const navigate = useNavigate();

// initialising ref
const firstNameRef = useRef(null);
const lastNameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null);
const roleRef = useRef(null);

// initial form state of user/admin
const [signUpDetails, setSignupDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user'
})


const saveFormData = e =>{
    e.preventDefault();
    
    let formData = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: roleRef.current.value
    }
    // destructure from details
    const { firstName, lastName, email, password, role} = formData;

    // validate from
    if(firstName === '' || lastName === '' || email === '' || password ===''){
        alert("Please fill all the details !!");
        return;
    }
    setSignupDetails({ ...formData});
    // console.log(signUpDetails);
    // signup
    signUp(formData)
    .then(res =>{
        console.log('signup success response :', res);
        console.log(signUpDetails);
        navigate('/login');
    })
    .catch(err =>{
        console.log("sign up error:", err);
    })

}
  return (
    <div className='container align-items-center'>
    <div className="card border-primary">
        <div className="card-body">
            <h5 className="card-title text-center mt-2 mb-4"><strong>Sign up for your EdTech Account!</strong></h5>
            <form onSubmit={saveFormData}>
                <div className="mb-3">
                    <label htmlFor="first name" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder='Enter First Name'
                        ref={firstNameRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="last name" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder='Enter Last Name'
                        ref={lastNameRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email id</label>
                    <input 
                        type="email" 
                        className="form-control"
                        placeholder='Enter Email id'
                        ref={emailRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder='Enter Password' 
                        ref={passwordRef}/>
                </div>
                <div className="mb-3">
                <label htmlFor="usertype" className="form-label">Select user type</label>
                <select className="form-select" ref={roleRef}>
                    <option value="user">USER</option>
                    <option value="admin">ADMIN</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary mt-2 w-100">Submit</button>
            </form>
            <div className='text-center mt-2'>
                <p className='text-muted'>Already Login <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup;