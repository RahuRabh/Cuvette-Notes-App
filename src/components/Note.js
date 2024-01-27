import React, { useState } from "react";
import Earrow from "../assets/Earrow.png";
import Darrow from "../assets/Darrow.jpg";

export default function Note({ title, initial }) {
  
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState({});

  const handleTextChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const handleClick = () => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      format: "{day} {month} {year} {hour}:{minute}",
    });

    const formattedTime = formatter.format(new Date());

    setNotes((prevNotes) => ({
      ...prevNotes,
      [title]: [
        ...(prevNotes[title] || []),
        { text: currentNote, time: formattedTime },
      ],
    }));
    setCurrentNote("");
  };

  return (
    <div className="w-full bg-[#DAE5F5]">
      <div className="heading bg-[#001F8B] h-24 flex">
        <p className="w-16 h-16 px-[14px] py-[18px] mx-5 my-3 rounded-full bg-[#0047FF] text-2xl font-medium leading-6 text-white">
          {initial}
        </p>
        <p className="text-2xl font-medium leading-7 p-3 my-3 text-white">
          {title}
        </p>
      </div>

      <div className="w-[1280px] flex drop-shadow-2xl flex-col m-5 overflow-x-hidden overflow-y-auto max-h-[500px]">
        {notes[title]?.map((note, index) => {
          return (
            <div
              className="note w-[1250px] flex flex-col bg-white m-5"
              key={index}
            >
              <div className="flex">
                <p className="p-4 flex-grow m-2">{note.text}</p>
                <p className="time bottom-0 right-0 mt-14 mx-5">{note.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="inputbox bg-[#001F8B] h-64 absolute bottom-0">
        <textarea
          onChange={handleTextChange}
          placeholder="Enter your text here"
          value={currentNote}
          className="bg-white h-52 w-[1250px] mx-10 mt-10 rounded-lg border p-5"
        ></textarea>
        <img
          alt="arrow"
          onClick={handleClick}
          src={currentNote ? Earrow : Darrow}
          className={"w-8 h-7 absolute bottom-8 right-14"}
        />
      </div>
    </div>
  );
}