import React, { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import Note from "./Note";
import bg from "../assets/bg.svg";
import lock from "../assets/lock.png";

const Sidebar = () => {
  const [notes, setnotes] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [title, setTitle] = useState("");
  const [initial, setInitial] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if (storedNotes) {
      setnotes(storedNotes);
    }
  }, []);

  const handleAddNote = (note) => {
    setnotes((prevNotes) => [...prevNotes, note]);
  };

  const initials = (title) =>
    title
      .split(" ")
      .slice(0, 2)
      .map((word) => word.slice(0, 1).toUpperCase())
      .join("");

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const opentext = (note) => {
    setShowMainContent(false);
    setTitle(note.title);
    setInitial(initials(note.title));
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="flex ">
      <div className="heading sm:w-60 justify-center lg:w-96 h-screen relative">
        <h1 className="p-10 mt-5 lg:text-4xl text-2xl leading-9 lg:leading-10 font-medium text-center sticky">
          Pocket Notes
        </h1>

        {notes.map((note, index) => (
          <div
            key={index}
            onClick={() => opentext(note)}
            className="note overflow-y-auto overflow-x-hidden max-h-[50%] flex w-96 hover:bg-[#2F2F2F2B] rounded-2xl"
          >
            <p
              className={`w-16 h-16 p-5 mx-5 my-3 rounded-full bg-[${note.color}] text-2xl font-medium leading-6 text-white`}
            >
              {initials(note.title)}
            </p>
            <p className="text-2xl font-medium leading-7 p-3 my-3">
              {note.title}
            </p>
          </div>
        ))}

        <button
          className="w-16 h-16 lg:w-24 lg:h-24 rounded-[50%] bg-[#16008B] text-white font-medium lg:text-7xl text-4xl absolute bottom-10 right-10 z-1"
          onClick={handleOpenDialog}
        >
          +
        </button>
        {isDialogOpen && (
          <DialogBox
            handleCloseDialog={handleCloseDialog}
            handleAddNote={handleAddNote}
          />
        )}
      </div>

      {showMainContent && (
        <div className="maincontent w-full bg-[#DAE5F5] flex flex-col items-center justify-center">
          <img className="lg:w-[620px] lg:h-80" src={bg} alt="background" />
          <h1 className="text-5xl font-bold tight leading-10 mt-5">
            Pocket Notes
          </h1>
          <p className="lg:w-[700px] font-medium text-2xl leading-8 mt-5">
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 2 mobile phones
          </p>

          <div className="bottom fixed bottom-5 flex items-center">
            <img src={lock} alt="lock" />
            <p className="text-xl leading-8 ml-3">end-to-end encrypted</p>
          </div>
        </div>
      )}

      {!showMainContent && <Note title={title} initial={initial} />}
    </div>
  );
};

export default Sidebar;