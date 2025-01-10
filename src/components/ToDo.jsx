import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";
import AddIcon from "@mui/icons-material/Add";

const ToDo = () => {
  const [newToDo, setNewToDo] = useState("");
  const dispatch = useDispatch();

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (newToDo) {
      dispatch(addToDo(newToDo));
    }
    setNewToDo("");
  };
  return (
    <form className="flex justify-between mt-5" onSubmit={handleAddToDo}>
      <input
        className="w-full px-2 outline-none rounded-md"
        type="text"
        placeholder="Add Todo"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button className="px-1.5 py-1 bg-blue-500 ml-2 rounded-md text-white">
        <AddIcon />
      </button>
    </form>
  );
};

export default ToDo;