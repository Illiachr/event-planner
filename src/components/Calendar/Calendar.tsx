import { ReactNode } from 'react';
import { ITask } from '../../types/taskTypes';
import { formatDate } from '../../utils/dateUtils';

type Props = {
  onAddTask: (date: string) => void,
  onTaskEdit: (id: number) => void,
  data: Array<ITask>
};

const Calendar = ({
  data,
  onAddTask,
  onTaskEdit
}: Props) => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthFirstDay = new Date(year, month, 1);
  const monthLastDay = new Date(year, month + 1, 0);
  const weekFirstDay = monthFirstDay.getDay();
  const totalDays = monthLastDay.getDate();

  const taskElem = (text = '', clName = '') => {
    const cls = clName.length === 0 ?
      ['task']  :
      ['task', clName];
    return (
      `<span class="${cls.join(' ')}">${text}</span>`
    );
  };

  const calendarDayElem = (day = '', clName = '', task = null) => {
    const cls = clName.length === 0 ?
      ['calendar-day']  :
      ['calendar-day', clName];
    return (
      <div className={cls.join(' ')}>
        {day}
        {task}
      </div>
    );
  };

  const getBlankDays = (): ReactNode => {
    const days = [];
    for (let i = 0; i < weekFirstDay; i++) {
      const dayElem = (<div key={`blankday-${i}`} className='calendar-day'></div>);
      days.push(dayElem);
      // days.push(calendarDayElem());
    }
    return days;
  };

  const getDays = (): ReactNode => {
    const days = [];
    for (let day = 1; day <= totalDays; day++) {
      const daySlotDate = Date.parse(`${year}-${month}-${day}`);
      // console.log({
      //   parsed: daySlotDate,
      //   daySlotDate: new Date(daySlotDate)
      // });
      const tasks = data.filter(({ date }) => new Date(date).getDate() === day);

      let currentDayClName = '';
      if (day === currentDate.getDate()) {
        currentDayClName = 'current-day';
      }
      // days.push(calendarDayElem(day, currentDayClName));
      const dayElem = (
        <div
          key={`day-${day}`}
          className={`calendar-day ${currentDayClName}`}
          onClick={() => onAddTask(formatDate(new Date(year, month, day, 1)))}
        >
          {day}
          {tasks.length > 0 && tasks.map(({id, desc}) => (
            <span 
              key={`task-${day}-${id}`} 
              className='task'
              onClick={() => onTaskEdit(id)}
            >
              {desc}
            </span>
          ))}
        </div>
      );
      days.push(dayElem);
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
