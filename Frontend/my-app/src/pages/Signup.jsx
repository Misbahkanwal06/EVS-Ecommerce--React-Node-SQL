

import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Nav from '../components/Nav';

function Signup() {

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState('');
  
    console.log("g", gender);
    const [validationError, setValidationError] = useState({});
    console.log("validationerrors", validationError);
    const [isSubmit, setIsSubmit] = useState(false); // Flags
    //const [payload, setPayload] = useState({});


    const navigate = useNavigate();

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };


    const validate = (userObj) => {
        console.log("userObj", userObj);
        console.log("erorrrrr");
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        // console.log("name",userObj.name, userObj.email,password);
        if (!fname) {
            error.name = "Customer name is required!";
        }
        if (!email) {
            error.email = "User Email is required!";
        } else if (!emailRegex.test(email)) {
            error.email = "Please enter a valid email address";
        }
        if (!password) {
            error.password = "User Password is required!";
        } else if (!passwordRegex.test(password)) {
            error.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        return error;
    }

    useEffect(() => {
        console.log("awd", validationError);
        if (Object.keys(validationError).length === 0 && isSubmit) {
        }
    }, [validationError]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const customer = { fname, lname, email, password, gender}
        console.log("customer", customer);
        const errors = validate(customer);
        setValidationError(errors);
        setIsSubmit(true);
        if (Object.keys(validationError).length === 0 && isSubmit) {
            try {
                const res = await axios.post('http://localhost:3008/api/v1/customer/create', customer);
                console.log("res", res);
                // return res;
                if (res.data.send === "Customer registered successfully") {
                    alert("Customer registered successfully");
                    console.log("response object", res.data.obj);
                    navigate('/login');
                } else {
                    alert(" User cannot created");
                }
            } catch (error) {
                console.error('Error registering user', error);
            }
        }
    };

    // // Generate dropdown options for selecting the date
    // const generateDateOptions = () => {
    //     const options = [];
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = today.getMonth() + 1; // Month is 0-indexed
    //     const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the current month
    //     for (let i = 1; i <= daysInMonth; i++) {
    //         const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${i < 10 ? '0' + i : i}`;
    //         options.push(<option key={i} value={formattedDate}>{formattedDate}</option>);
    //     }
    //     return options;
    // }

    // // Generate dropdown options for selecting the date
    // const generateDateOptions = () => {
    //     const options = [];
    //     for (let year = 2000; year <= 3000; year++) {
    //         for (let month = 1; month <= 12; month++) {
    //             const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the current month
    //             for (let day = 1; day <= daysInMonth; day++) {
    //                 const formattedMonth = month < 10 ? '0' + month : month;
    //                 const formattedDay = day < 10 ? '0' + day : day;
    //                 const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;
    //                 options.push(<option key={formattedDate} value={formattedDate}>{formattedDate}</option>);
    //             }
    //         }
    //     }
    //     return options;
    // }

    return (
        <>
            <Nav />
            <form className="container mt-5 shadow rounded ">
                <div className="form-group m-2">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name"
                                value={fname}
                                onChange={(e) => setFName(e.target.value)}
                                required />
                        </div>
                        {/* {validationError.fname && <div style={{ color: 'red', fontSize: '0.7rem' }}>{validationError.fname}</div>} */}
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name"
                                value={lname}
                                onChange={(e) => setLName(e.target.value)}
                                required />
                        </div>
                    </div>
                </div>

                <div className="form-group m-2">
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                {validationError.email && <div style={{ color: 'red', fontSize: '10px' }}>{validationError.email}</div>}
                <div className="form-group">
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    {validationError.password && <div style={{ color: 'red', fontSize: '0.6rem' }}>{validationError.password}</div>}
                </div>


                <div className="form-group m-2">
                    <label>Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="femaleRadio" value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                        />
                        <label className="form-check-label" htmlFor="femaleRadio">
                            Female
                        </label>
                    </div>
                    <div className="form-check m-2">
                        <input className="form-check-input" type="radio" name="gender" id="maleRadio" value="male"
                            checked={gender === 'male'}
                            onChange={handleGenderChange}
                        />
                        <label className="form-check-label" htmlFor="maleRadio">
                            Male
                        </label>
                    </div>
                </div>


                {/* <div className="form-group m-2">
                    <input type="text" className="form-control" placeholder="Customer Type"
                        value={custype}
                        onChange={(e) => setCustype(e.target.value)}
                        required />
                </div>

                <div>
                    <input 
                        type="date"
                        name="duedate"
                        placeholder="Due date"
                        value={createdAt}
                        onChange={(e)=> setCreatedAt(e.target.value)} />
                </div> */}

                <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Sign in</button>
            </form>
        </>
    )
}

export default Signup;
