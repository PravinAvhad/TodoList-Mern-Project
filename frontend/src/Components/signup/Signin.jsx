import React, { useState } from 'react'
import "./signup.css";
import Headingcomp from './Headingcomp';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store';


const Signin = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        email: "",
        password: ""
    });
    const change = (e) => {
        const { name, value } = e.target;
        setinputs({ ...inputs, [name]: value });
    }
    const verify = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/signin`, inputs);
            if (response.data.message === "Please Sign Up First" || response.data.message === "Password is not correct.") {
                alert(response.data.message);
            }
            else {
                sessionStorage.setItem("id", response.data.others._id);
                dispatch(authActions.login());
                history("/");
            }
        } catch (error) {
            console.error("An Error Occurred: ", error);
        }
    }
    return (
        <div className='signup'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 column d-lg-flex justify-content-center align-items-center  d-none ">
                        <Headingcomp first="Sign" second="In" />
                    </div>
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className='d-flex flex-column w-100 p-3'>
                            <div className='d-lg-none d-block sign-up-smallheading'><h1>Sign In</h1></div>
                            <input className='p-2 my-3' type="email" name='email' placeholder='Enter Your Email' onChange={change} value={inputs.email} />

                            <input className='p-2 my-3' type="password" name='password' placeholder='Enter Your Password' onChange={change} value={inputs.password} />

                            <div className='d-flex p-2'>
                                <p>Create an Account ?</p>
                                <Link className="nav-link active signup-btn" to="/signup">Sign Up</Link>
                            </div>

                            <button className=" d-flex justify-content-center align-items-center btn-signup p-2" type="button" onClick={verify}>Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;