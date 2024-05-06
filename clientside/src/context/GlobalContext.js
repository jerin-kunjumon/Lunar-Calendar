import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 3,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalendarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
    showEventModal: false,
    setShowEventModal: () => {},
    showSignIn:true,
    setShowSignIn: () => {},
    dispatchCalEvent: ({type, payload})=> {},
    savedEvents: [],
    selectedEvent: null,
    setSelectedEvent: () => {},
    setLabels: () => {},
    labels: [],
    updateLabel: () => {},
    filteredEvents: [],
    userName: [],
    setUserName: () => {}
})

export default GlobalContext;