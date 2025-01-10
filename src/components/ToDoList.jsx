import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import {
  completeToDo,
  incompleteToDo,
  removeToDo,
} from "../features/todo/todoSlice";
import EditToDo from "./EditToDo";

const ToDoList = ({ task, srNo, id, complete }) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [editTask, setEditTask] = useState({
    id: "",
    task: "",
  });

  const handleEditClick = (id, task) => {
    setShowEdit(true);
    setEditTask({ id, task });
  };

  const handleEditChange = (e) => {
    setEditTask({ ...editTask, task: e.target.value });
  };

  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-gray-300 pb-2 mt-2">
        {/* section 1 */}
        <div className="w-4/5">
          <span className="text-gray-600 mr-4">{srNo + 1}.</span>
          {complete ? (
            <span className="line-through decoration-slate-600">{task}</span>
          ) : (
            <span>{task}</span>
          )}
        </div>
        {/* section 2 */}
        <div className="w-1/5 flex justify-around">
          <button
            className="bg-blue-500 rounded-md text-white w-8"
            onClick={() => handleEditClick(id, task)}
          >
            <EditIcon className="text-[10px]" />
          </button>
          <button
            className="bg-red-500 rounded-md text-white w-8"
            onClick={() => dispatch(removeToDo(id))}
          >
            <DeleteIcon className="text-[10px]" />
          </button>
          {complete ? (
            <button className="bg-yellow-500 rounded-md text-white w-8">
              <CloseIcon
                className="text-[10px]"
                onClick={() => dispatch(incompleteToDo(id))}
              />
            </button>
          ) : (
            <button className="bg-green-500 rounded-md text-white w-8">
              <CheckIcon
                className="text-[10px]"
                onClick={() => dispatch(completeToDo(id))}
              />
            </button>
          )}
        </div>
      </div>
      {showEdit && (
        <EditToDo
          editTask={editTask}
          onClose={() => setShowEdit(false)}
          handleEditChange={handleEditChange}
        />
      )}
    </>
  );
};

export default ToDoList;
