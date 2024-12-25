import React, { useState } from 'react';
import Login1 from '../assets/login.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing icons

const Login = () => {
    const [credential, setCredential] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form is submitted");
        const { email, password } = credential;

        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();
        console.log("This is response data", json);
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='login-img' src={Login1} alt='login image' />
                </div>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                name='email' 
                                value={credential.email} 
                                onChange={handleChange} 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                            />
                        </div>
                        <div className="mb-3 password-container">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    value={credential.password}
                                    onChange={handleChange}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link className="nav-link" to='/signup'>Don't have an account? Sign up</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
