import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { editToDo } from "../features/todo/todoSlice";

const EditToDo = ({ editTask, onClose, handleEditChange }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const handleUpdate = (editedTask) => {
    dispatch(editToDo(editedTask));
    onClose();
  };

  const modalClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={modalClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-gray-300 w-1/2 h-1/2 p-3 rounded-md">
        <h1 className="text-2xl text-center">Edit Note</h1>
        <div className="mt-4">
          <input
            className="w-full py-2 px-2 outline-none rounded-md"
            type="text"
            placeholder="Edit Todo"
            value={editTask.task}
            onChange={handleEditChange}
          />
          <button
            className="bg-blue-400 p-1 mr-3 rounded-md text-white mt-3"
            onClick={() => handleUpdate(editTask)}
          >
            Update
          </button>
          <button
            className="bg-blue-400 p-1 rounded-md text-white mt-3"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditToDo;
