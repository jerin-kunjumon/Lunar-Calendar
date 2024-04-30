import React, { useContext } from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import Labels from './Labels'
import GlobalContext from '../context/GlobalContext'


export default function Sidebar() {
  const { showSignIn } = useContext(GlobalContext)

  return (
    <div className='border p-5 w-64'>
      <CreateEventButton />
      <SmallCalendar />
      { showSignIn === false ? (<><Labels/></>) : <></>}
    </div>
  )
}
