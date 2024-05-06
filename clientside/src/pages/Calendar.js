import React, { useState, useContext, useEffect } from 'react';
// import '../App.css';
import { getMonth } from '../util';
import CalendarHeader from '../components/CalendarHeader';
import Sidebar from '../components/Sidebar';
import Month from '../components/Month';
import GlobalContext from '../context/GlobalContext';
import EventModal from '../components/EventModal';
import axios from "axios";


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal, setShowSignIn } = useContext(GlobalContext)
    useEffect(() => {
        console.log(monthIndex)
        setCurrentMonth(getMonth(monthIndex));

        axios.get("http://localhost:3000/api/users/profile", {
            withCredentials:true,
            // headers: {
            //     Authorization: `Bearer ${response.data.token}`
            //   }
            }).then((response) => {
                // console.log(response.data,"$dt")
                // setUserName(response.data.name)
                setShowSignIn(false)
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, [monthIndex]);
    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currentMonth} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Calendar
