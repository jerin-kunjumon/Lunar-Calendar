import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 3,
    setMonthIndex: (index) => {}
})

export default GlobalContext;