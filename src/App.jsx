import React, { useState } from "react";
import ToDo from "./components/ToDo";
import FilterButton from "./components/FilterButton";
import ToDoList from "./components/ToDoList";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  const incompleteTodos = useSelector((state) => state.incompleteTodos);
  const completeTodos = useSelector((state) => state.completeTodos);
  const isSearching = useSelector((state) => state.isSearching);
  const searchTodos = useSelector((state) => state.searchTodos);
  const selectedOption = useSelector((state) => state.option);

  const renderTodos = (todosToRender) => {
    return todosToRender.map((todo, index) => (
      <ToDoList
        key={todo.id}
        id={todo.id}
        task={todo.task}
        srNo={index}
        complete={todo.complete}
      />
    ));
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/2 max-h-max bg-gray-200 mt-8 p-3 rounded-md">
          <h1 className="text-center text-3xl font-bold mt-3">TODO APP</h1>
          <ToDo />
          <FilterButton />
          <h5 className="mt-4 mb-3 italic">All Your Notes Here...</h5>
          {isSearching
            ? renderTodos(searchTodos)
            : (selectedOption === "all" &&
                !isSearching &&
                renderTodos(todos)) ||
              (selectedOption === "complete" &&
                !isSearching &&
                renderTodos(completeTodos)) ||
              (selectedOption === "incomplete" &&
                !isSearching &&
                renderTodos(incompleteTodos))}
        </div>
      </div>
    </>
  );
}

export default App;
