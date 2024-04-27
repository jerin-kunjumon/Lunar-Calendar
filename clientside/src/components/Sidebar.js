import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import Labels from './Labels'


export default function Sidebar() {
  return (
    <div className='border p-5 w-64'>
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </div>
  )
}
