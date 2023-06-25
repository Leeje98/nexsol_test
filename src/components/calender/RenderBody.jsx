import { 
    addDays,    // 주어진 날짜에 지정된 일수를 더합니다.
    endOfMonth, // 주어진 날짜의 월말을 반환합니다. 결과는 현지 시간대로 표시됩니다.
    endOfWeek,  // 주어진 날짜의 주의 끝을 반환합니다. 결과는 현지 시간대로 표시됩니다.
    format,     // 지정된 형식으로 형식이 지정된 날짜 문자열을 반환 (yyyy, mm 등)
    isSameDay,   // 주어진 날짜가 같은 날짜(연월)입니까? (첫번째날짜, 두번째날짜)
    isSameMonth,  // 주어진 날짜가 같은 달(및 연도)에 있습니까? (첫번째날짜, 두번째날짜)
    parse,        // 주어진 형식 문자열을 사용하여 문자열에서 구문 분석된 날짜를 반환 (yyyy, mm 등)
    startOfMonth,   // 주어진 날짜의 월 시작을 반환합니다. 결과는 현지 시간대로 표시됩니다.
    startOfWeek     // 주어진 날짜의 한 주의 시작을 반환합니다. 결과는 현지 시간대로 표시됩니다.
} from 'date-fns'
import React from 'react'

const RenderBody = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);  // 달력에 보이는 현재 달의 시작일
    const monthEnd = endOfMonth(currentMonth);      // 달력에 보이는 현재 달의 마지막일
    const startDate = startOfWeek(monthStart);     // 달력에 보이는 monthStart가 속한 한 주의 시작
    const endDate = endOfWeek(monthEnd);           // 달력에 보이는 monthEnd가 속한 한 주의 끝

    const rows = [];  // [일월화수목금토] 한 주 * 4 또는 5주
    let days = [];    // [일월화수목금토] 한 주
    let day = startDate;  // 달력에 보이는 현재 달의 한 주의 시작
    let formattedDate = '';

    while (day <= endDate) {  
    // while 반복문은 day가 endDate보다 커지면 종료 
    // 일~토 의 7일동안 표를 그려야 하므로 for 문을 돌며 day를 1씩 올려주며 날짜를 추가해준다. 
    // for문이 끝나면 rows에 추가를 해주고 초기화를 해준다.
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                 className={`col cell ${ // 오늘의 날짜를 표시해주는(selected) 것과 현재 달의 날짜가 아닌 날들은 색상 컨트롤
                    !isSameMonth(day, monthStart)
                    ? 'disabled'
                    : isSameDay(day, selectedDate)
                    ? 'selected'
                    : format(currentMonth, 'M') !== format(day, 'M')
                    ? 'not-valid'
                    :'valid'
                 }`}
                 key={day}
                 onClick={() => onDateClick(parse(cloneDay))}
                >
                    <span
                        className={
                            format(currentMonth, 'M') !== format(day, 'M')
                            ? 'text not-valid'
                            : ''
                        }
                    >
                        {formattedDate}
                    </span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>,
        );
        days = [];
    }


  return (
    <div className='body'>{rows}</div>
  )
}

export default RenderBody
