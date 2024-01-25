import React, { useState } from 'react';

const DialogBox = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#ffffff');

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = { title, color };
    onAddNote(note);
    setTitle('');
    setColor('#ffffff');
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-2xl font-semibold mb-4">Add Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-700">
              Color:
            </label>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default DialogBox;