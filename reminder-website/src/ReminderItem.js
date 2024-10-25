import React from 'react';

function ReminderItem({reminder, deleteReminder}) {
  return (
    <li>
      <span className="reminder-text">{reminder.text}</span>
      <button
        className="deleteButton"
        onClick={() => deleteReminder(reminder.id)}
      >
        Delete
      </button>
    </li>
  );
}
export default ReminderItem;
