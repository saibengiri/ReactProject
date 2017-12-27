import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import  'react-big-calendar/lib/css/react-big-calendar.css'
import events from '../data/events.js'


class MyCalendar extends Component{
    componentWillMount(){
        BigCalendar.setLocalizer(
            BigCalendar.momentLocalizer(moment)
          );
    }
    render(){
        return(
        <div>
            <BigCalendar events={events}></BigCalendar>
        </div>
    )}
}

export default MyCalendar;