
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';


const MyCalendar = () => {
  const localizer = momentLocalizer(moment);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="App" title="Calendar" />
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={scheduleData}
          startAccessor="StartTime"
          endAccessor="EndTime"
          titleAccessor="Subject"
          showMultiDayTimes
          step={60}
          dayLayoutAlgorithm="no-overlap"
         
        />
      </div>
    </div>
  );
};

export default MyCalendar;


