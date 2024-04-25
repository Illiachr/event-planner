import { ReactNode } from 'react';

const Calendar = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthFirstDay = new Date(year, month, 1);
  const monthLastDay = new Date(year, month + 1, 0);
  const weekFirstDay = monthFirstDay.getDay();
  const totalDays = monthLastDay.getDate();

  const calendarDayElem = (day = '', clName = '') => {
    const cls = clName.length === 0 ?
      ['calendar-day']  :
      ['calendar-day', clName];
    return (
      <div className={cls.join(' ')}>{day}</div>
    );
  };

  const getBlankDays = (): ReactNode => {
    const days = [];
    for (let i = 0; i < weekFirstDay; i++) {
      days.push(calendarDayElem());
    }
    return days;
  };

  const getDays = (): ReactNode => {
    const days = [];
    for (let day = 1; day <= totalDays; day++) {
      let currentDayClName = '';
      if (day === currentDate.getDate()) {
        currentDayClName = 'current-day';
      }
      days.push(calendarDayElem(day, currentDayClName));
    }
    return days;
  };

  return (
    <div id="calendar" className="calendar-grid">
      {getBlankDays()}
      {getDays()}
    </div>
  );
};

export default Calendar;
