import React from 'react';
import ReminderItem from './ReminderItem';

function ReminderList({reminders, deleteReminder}) {
  return (
    <ul>
      {reminders.map((reminder) => (
        <ReminderItem
          key={reminder.id}
          reminder={reminder}
          deleteReminder={deleteReminder}
        />
      ))}
    </ul>
  );
}

export default ReminderList;
