import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'
import './react-big-calendar.css'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

const localizer = momentLocalizer(moment)

const events = [{
  title: 'Cumpleaños del jefe',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
  notes: 'Comprar el pastel',
  user: {
    _id: '123',
    name: 'Fernando'
  }
}]

export const CalendarScreen = () => {

  const [lastView, setlastView] = useState( localStorage.getItem( 'lastView' ) || 'month' )

  const onDoubleClick = e => {
    console.log('double click evento')
  }

  const onSelect = e => {
    console.log('select evento')
  }

  const onViewChange = e => {
    setlastView( e )
    localStorage.setItem( 'lastView', e )

  }

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      color: 'white',
      display: 'block',
      opacity: 0.8
    }

    return { style }
  }

  return (
    <>
      <Navbar />

      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClick={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChange }
        view={ lastView }
      />

      <CalendarModal />

    </>
  )
}
