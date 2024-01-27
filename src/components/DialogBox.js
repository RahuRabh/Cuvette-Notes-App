import React, { useState } from "react";

const DialogBox = ({ handleCloseDialog, handleAddNote }) => {
  const [note, setNote] = useState({ title: "", color: "#ffffff" });
  const [showDialogBox, setshowDialogBox] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    existingNotes.push(note);
    localStorage.setItem("notes", JSON.stringify(existingNotes));
    handleAddNote(note)
    setNote({ title: "", color: "#ffffff" });
    setshowDialogBox(false);
    handleCloseDialog()
  };

  return (
    <>
      {showDialogBox && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="dialog-box bg-white lg:w-[760px] lg:h-80 sm:w-74 sm:h-54 p-6 rounded absolute">
            <h2 className="lg:text-3xl sm:text-xl font-medium mb-4">
              Create New Group
            </h2>
            <div className="my-8 flex">
              <label
                htmlFor="title"
                className="lg:text-3xl sm:text-xs font-medium"
              >
                Group Name
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter group name"
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                className="sm:w-40 lg:w-[430px] ml-10 outline outline-offset-2 outline-[#CCCCCC] p-2 rounded"
              />
            </div>

            <div className="my-8 flex">
              <label
                htmlFor="color"
                className="lg:text-3xl sm:text-xs font-medium"
              >
                Choose Color
              </label>

              <div className="flex gap-5 ml-6">
                <p
                  onClick={(e) => setNote({ ...note, color: "#B38BFA" })}
                  className="rounded-full w-8 h-8 bg-[#B38BFA] hover:outline outline-blue-500 cursor-pointer]"
                ></p>
                <p
                  onClick={(e) => setNote({ ...note, color: "#FF79F2" })}
                  className="rounded-full w-8 h-8 bg-[#FF79F2] hover:outline outline-blue-500 cursor-pointer"
                ></p>
                <p
                  onClick={(e) => setNote({ ...note, color: "#43E6FC" })}
                  className="rounded-full w-8 h-8 bg-[#43E6FC] hover:outline outline-blue-500 cursor-pointer"
                ></p>
                <p
                  onClick={(e) => setNote({ ...note, color: "#F19576" })}
                  className="rounded-full w-8 h-8 bg-[#F19576] hover:outline outline-blue-500 cursor-pointer"
                ></p>
                <p
                  onClick={(e) => setNote({ ...note, color: "#0047FF" })}
                  className="rounded-full w-8 h-8 bg-[#0047FF] hover:outline outline-blue-500 cursor-pointer"
                ></p>
                <p
                  onClick={(e) => setNote({ ...note, color: "#6691FF" })}
                  className="rounded-full w-8 h-8 bg-[#6691FF] hover:outline outline-blue-500 cursor-pointer"
                ></p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#001F8B] relative sm:left-[300px] lg:left-[600px] text-white sm:text-xl p-2 rounded-xl hover:outline outline-blue-300 cursor-pointer"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogBox;