import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from 'react'
import "react-calendar/dist/Calendar.css";
import { Moon, Hemisphere } from "lunarphase-js";
import GlobalContext from "../context/GlobalContext";



export default function Day({ day, rowIdx }) {
  const moonPhase = day.moonPhase || {
    fraction: 0,
    phase: 'null',
    angle: 'null',
    date: null,
  }
  const [dayEvents, setDayEvents] = useState([])
  const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent} = useContext(GlobalContext)
  
  useEffect(() => {
    const events = filteredEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
    setDayEvents(events)
  }, [filteredEvents, day])

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-blue-600 text-white rounded-full w-7' : '';
  }
  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        { rowIdx === 0 && (
        <p className="text-sm mt-1">
          {day.format('ddd').toUpperCase()}
        </p>
      )}
        
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      {/* <p className="text-xs">{moonPhase.fraction.toFixed(2)}</p>
      <p className="text-xs">{moonPhase.phase}</p> */}
      <div className="flex-1 cursor-pointer" onClick={() => {
        setDaySelected(day)
        setShowEventModal(true);
      }}>
        {dayEvents.map((evt,idx)=>(
          <div 
          key={idx}
          onClick={() => setSelectedEvent(evt)}
          className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}>
            {evt.title}
          </div>
        ))}
      </div>
      <small style={{ display: "block" }}>
              {Moon.lunarPhaseEmoji(new Date(day), Hemisphere.NORTHERN)}{" "}
              
              {Math.round(Moon.lunarAge(new Date(day), Hemisphere.NORTHERN))}
            </small>
    </div>
  )
}
