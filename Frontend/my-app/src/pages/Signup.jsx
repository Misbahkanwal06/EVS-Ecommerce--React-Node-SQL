import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
// import './Signup.css'; // Import custom CSS for styling

function Signup() {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [validationError, setValidationError] = useState({});
    const navigate = useNavigate();

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const validate = (userObj) => {
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!fname) {
            error.name = 'Customer name is required!';
        }
        if (!email) {
            error.email = 'User Email is required!';
        } else if (!emailRegex.test(email)) {
            error.email = 'Please enter a valid email address';
        }
        if (!password) {
            error.password = 'User Password is required!';
        } else if (!passwordRegex.test(password)) {
            error.password =
                'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }
        return error;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const customer = { fname, lname, email, password, gender };
        console.log("customer", customer);
        const errors = validate(customer);
        setValidationError(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const res = await axios.post('http://localhost:3008/api/v1/customer/create', customer);
                if (res.data.send === 'Customer registered successfully') {
                    alert('Customer registered successfully');
                    console.log("response object", res.data.obj);
                    navigate('/login');
                } else {
                    alert('User cannot be created');
                }
            } catch (error) {
                console.error('Error registering user', error);
            }
        }
    };

    return (
        <>
            <Nav />
            {/* <div className="container">
                <h2 className="">Sign Up</h2>
            </div> */}

            <div className='container d-flex justify-content-between  mt-5' style={{width:"850px"}}>
                <div>
                    <h3>Create Your Account</h3>
                </div>
                <div>
                    <p className="text-center ">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
            {/* vh-100 */}
            <div className="container d-flex justify-content-center align-items-center ">
                <form className="signup-form " >
                    {/* <h2 className="text-center mb-4">Sign Up</h2> */}
                    {/*  */}
                    <div className="form-group">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="" style={{ width: "300px" }}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    value={fname}
                                    onChange={(e) => setFName(e.target.value)}
                                    required
                                />
                                {validationError.fname && (
                                    <div className="text-danger">{validationError.fname}</div>
                                )}
                            </div>
                            <div style={{ width: "300px" }}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={lname}
                                    onChange={(e) => setLName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    {/* <div className='d-flex  justify-content-space-between'>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                value={fname}
                                onChange={(e) => setFName(e.target.value)}
                                required
                            />
                            {validationError.fname && (
                                <div className="text-danger">{validationError.fname}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                value={lname}
                                onChange={(e) => setLName(e.target.value)}
                                required
                            />
                        </div>
                    </div> */}
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {validationError.email && (
                            <div className="text-danger">{validationError.email}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {validationError.password && (
                            <div className="text-danger">{validationError.password}</div>
                        )}
                    </div>
                    <div className="form-group">
                        {/* <label>Gender</label> */}
                        <select
                            className="form-control"
                            value={gender}
                            onChange={handleGenderChange}
                            required
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-block" onClick={handleSubmit}>
                        Sign Up
                    </button>
                    {/* <p className="text-center mt-2">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p> */}
                </form>
            </div>
        </>
    );
}

export default Signup;
