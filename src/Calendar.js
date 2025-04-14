import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Sensory Play Session',
      start: new Date(),
      end: new Date(),
    },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleAddEvent = () => {
    setEvents([...events, {
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
    }]);
    setNewEvent({ title: '', start: '', end: '' });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>Activity Calendar</h2>
      <input
        type="text"
        placeholder="Activity Title"
        value={newEvent.title}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <input
        type="datetime-local"
        value={newEvent.start}
        onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <input
        type="datetime-local"
        value={newEvent.end}
        onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddEvent}>Add Activity</button>

      <hr style={{ margin: '1.5rem 0' }} />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400 }}
      />
    </div>
  );
};

export default MyCalendar;
