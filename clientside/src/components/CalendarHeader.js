import React, { useContext} from 'react'
import logo from '../assets/logo.png'
import GlobalContext from '../context/GlobalContext'
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import axios from 'axios';



export default function CalendarHeader() {
  const {monthIndex,setMonthIndex, showSignIn, setShowSignIn} = useContext(GlobalContext)
  const navigate = useNavigate();
  const signupPage  = () => {
    navigate("/Signup");
  };
  const loginPage  = () => {
    navigate("/Login");
  };

  const logout = () => {
    axios.post("http://localhost:3000/api/users/logout")
            .then((response) => {
              alert("Logout Successful");
                setShowSignIn(true)
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
  }

  function handlePrevMonth(){
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex + 1);
  }
  function handleRest(){
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random(): dayjs().month())
  }
  return (
    <header className='px-4 py-2 flex justify-between'>
      <div className='flex items-center'>
       <img src={logo} alt="calendar" className='mr-2 w-12 h-12'/>
       <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
       <button onClick={handleRest} className="border rounded py-2 px-4 mr-5">
          Today 
       </button>
       <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_left
        </span>
       </button>
       <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_right
        </span>
       </button>
       <h2 className='ml-4 text-xl text-gray-500 font-bold'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
       </h2>
       </div>
       {showSignIn === true ? (
       <><button onClick={loginPage}>
          Login
        </button><button onClick={signupPage}>
            Sign Up
          </button></>
       ):
       (<>
       <button onClick={logout}>
        Logout
        </button></>)
      }
    </header>
  )
}
