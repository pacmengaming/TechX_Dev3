import React, {useState} from 'react';

function ReminderForm({addReminder}) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addReminder(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your reminder"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Reminder</button>
    </form>
  );
}

export default ReminderForm;
