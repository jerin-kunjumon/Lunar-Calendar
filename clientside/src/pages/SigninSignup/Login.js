import React, { useContext, useEffect, useState } from "react";
import "./SigninSignup.css";
import axios from "axios";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";


const Login = () => {

    const { setShowSignIn, setUserName } = useContext(GlobalContext)
    const navigate = useNavigate();
    const calendarPage = () => {
        navigate("/");
    };

    const [action, setAction] = useState("Login");

    let errorsObj = { email: "", password: "" };
    const [errors, setErrors] = useState(errorsObj);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    function Login(e) {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/users/login", formData)
            .then((response) => {
            localStorage.setItem("userLoggedIn","true")

                alert("Login Successful");
                console.log(response);
                    
                   
                        setShowSignIn(false)
                        calendarPage();
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });

        let error = false;
        const errorObj = { ...errorsObj };
        if (formData.email === "") {
            errorObj.email = "Email is required";
            error = true;
        }
        if (formData.password === "") {
            errorObj.password = "Password is required";
            error = true;
        }
        setErrors(errorObj);
        if (!error) {
            console.log("Form submit");
        }
    }

    return (
        <div className="container h-auto">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={Login}>
                <div className="inputs">

                    <div></div>


                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Id"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <div className="m-auto">{errors.email}</div>}

                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <div className="m-auto">{errors.password}</div>}
                </div>

                <div className="forgot-password">
                    Forgot Password? <span>Click here!</span>
                </div>

                <div className="submit-container justify-end my-6">

                    <div>
                        <button
                            type="submit"
                            className="submit"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>





    )
}

export default Login
