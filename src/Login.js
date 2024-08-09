import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    
    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-100 ">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            name="email" 
                            value={values.email}
                            onChange={handleInput} 
                            className="form-control rounded-0"
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            value={values.password}
                            onChange={handleInput} 
                            className="form-control rounded-0"
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    
                    <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Log in</strong></button>
                    <p>Are you signed up already?</p>
                    <Link to="/Signup" className="btn btn-default border w-100 rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
