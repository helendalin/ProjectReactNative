import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./SignupValidation";
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                axios.post('http://localhost:8080/phpmyadmin/index.php?route=/sql&pos=0&db=project.react.native&table=signup', values)
                    .then(res => {
                        navigate('/login');
                    })
                    .catch(err => console.log(err));
            }
            setIsSubmitting(false);
        }
    }, [errors, isSubmitting, navigate, values]);

    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input 
                            type="text" 
                            placeholder="Enter Username" 
                            name="username"
                            value={values.username}
                            onChange={handleInput} 
                            className="form-control rounded-0"
                        />
                        {errors.username && <span className="text-danger">{errors.username}</span>}
                    </div>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Sign up</strong></button>
                    <p>Are you signed up already?</p>
                    <Link to="/Login" className="btn btn-default border w-100 rounded-0 text-decoration-none">Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
