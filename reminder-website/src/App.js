import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import './App.css';

function App() {
  const [reminders, setReminders] = useState([]);

  const addReminder = (text) => {
    const newReminder = { id: Date.now(), text };
    setReminders([...reminders, newReminder]);
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  return (
    <div className="App">
      <h1>Krish's Reminder List</h1>
      <ReminderForm addReminder={addReminder} />
      <div className="reminder-card">
        <ReminderList reminders={reminders} deleteReminder={deleteReminder} />
      </div>
    </div>
  );
}
export default App;
