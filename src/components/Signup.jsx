import React, { useState } from 'react'
import Login1 from '../assets/login.jpeg'
import { Link, useNavigate } from 'react-router-dom'
// import Login1 from '../../public/vite.svg'


const Signup = () => {
    const [credential, setCredential] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate= useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log("form is submitted");
        const { name, email, password}= credential
        const response = await fetch('', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
          body: JSON.stringify({name, email, password})  
        }) 
        const json= await response.json()
        console.log("this is response data", json);
        if(json.success){
            localStorage.setItem('token', json.authToken)
            navigate('/login')
            
        }else{
          alert('invalid credentials')
        }
               
    }

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='login-img' src={Login1} alt='login image' />
                </div>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" name='name' value={credential.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' value={credential.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' value={credential.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link className="nav-link" to='/login'>Already have accout? login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
