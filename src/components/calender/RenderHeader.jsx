import { addMonths, format, subMonths } from 'date-fns';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import React, { useState } from 'react';

export default function RenderHeader({ currentMonth, prevMonth, nextMonth }) {
  return (
    <div className='header row'>
        <div className='col col-start calenderHerder'>
            <MdOutlineArrowBackIos 
                onClick={prevMonth} 
                className='iconBtn'
            />
            <div className='text'> 
                <span className='text month'>
                    {format(currentMonth, 'yyyy')}년
                </span>
                <span className='text month'>
                    {format(currentMonth, 'MM')}월
                </span>
            </div>
            <MdOutlineArrowForwardIos 
                onClick={nextMonth} 
                className='iconBtn'
            />
        </div> 
    </div>
  )
}


