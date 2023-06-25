import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar 
        onChange={onChange} 
        value={value} 
        minDate={new Date()}
        locale="en-US"
        calendarType="US"
      />
    </>
  );
}
