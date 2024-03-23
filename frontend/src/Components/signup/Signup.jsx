import React, { useState } from 'react'
import "./signup.css";
import Headingcomp from './Headingcomp';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        email: "",
        username: "",
        password: ""
    });

    const change = (e) => {
        const { name, value } = e.target;
        setinputs({ ...inputs, [name]: value });
    }
    const submit = async (e) => {
        e.preventDefault();
        await axios.post(`${window.location.origin}/api/v1/register`, inputs)
            .then((res) => {
                if (res.data.message === "User Already Exists.") {
                    alert(res.data.message);
                }
                else {
                    alert(res.data.message);
                    setinputs({
                        email: "",
                        username: "",
                        password: ""
                    });
                    history("/signin");
                }
            });
    }


    return (
        <div className='signup'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 column d-lg-flex justify-content-center align-items-center d-none ">
                        <Headingcomp first="Sign" second="Up" />
                    </div>
                    <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                        <div className='d-flex flex-column w-100 p-3'>
                            <div className='d-lg-none d-block  sign-up-smallheading'><h1>Sign Up</h1></div>
                            <input className='p-2 my-3' type="email" name='email' placeholder='Enter Your Email' onChange={change} value={inputs.email} />
                            <input className='p-2 my-3' type="username" name='username' placeholder='Enter Your UserName' onChange={change} value={inputs.username} />
                            <input className='p-2 my-3' type="password" name='password' placeholder='Enter Your Password' onChange={change} value={inputs.password} />

                            <div className='d-flex p-2'>
                                <p>Have an Account ?</p>
                                <Link className="nav-link active signup-btn" to="/signin">Sign In</Link>
                            </div>
                            <button className=" d-flex justify-content-center align-items-center btn-signup p-2" type="button" onClick={submit}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;