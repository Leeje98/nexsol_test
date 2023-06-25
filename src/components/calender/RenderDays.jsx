import React from 'react'

export default function RenderDays() {
    const days = [];
    // const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];
    const date = ['일', '월', '화', '수', '목', '금', '토'];
  
    for (let i = 0; i < date.length; i++) {
        days.push(
            <div className='col' key={i}>
                {date[i]}
            </div>
        )
    }
  return (
    <div className='days row'>{days}</div>
  )
}
