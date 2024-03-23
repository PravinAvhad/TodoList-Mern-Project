import React from 'react'
import "./navbar.css";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store';

const Navbar = () => {
    const isLogin = useSelector((state) => state.isLoggedin);
    const dispatch = useDispatch();
    const leave = () => {
        sessionStorage.clear("id");
        dispatch(authActions.logout());
    }
    return (
        <div><nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/"> <GiWhiteBook /> ToDo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
                        </li>
                        {!isLogin && (
                            <div className='d-flex'>
                                <li className="nav-item">
                                    <Link className="nav-link active btn-nav  p-2" aria-current="page" to="/signin">Sign In</Link>
                                </li>
                            </div>
                        )}
                        {isLogin && (
                            <div className='d-flex'>
                                <li className="nav-item" onClick={leave}>
                                    <Link className="nav-link active btn-nav p-2" aria-current="page" to="/" >Log Out</Link>
                                </li>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </nav></div>
    )
}

export default Navbar;