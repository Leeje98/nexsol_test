import React, { useState } from "react"; 
import RenderHeader from "./components/calender/RenderHeader";
import { addMonths, subMonths } from "date-fns";
import RenderDays from "./components/calender/RenderDays";
import RenderBody from "./components/calender/RenderBody";
 

const CalenderLee = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
      setCurrentMonth(subMonths(currentMonth, 1))
  }
  const nextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1))
  }
  const onDateClick = (day) => {
      setSelectedDate(day);
  }

  return (
      <div className='calendar'>
          <RenderHeader
              currentMonth={currentMonth}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
          />
          <RenderDays />
          <RenderBody 
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
          />
      </div>
  )
}


export default CalenderLee