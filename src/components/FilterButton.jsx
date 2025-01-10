import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import {
  markAllAsCompleteToDo,
  searchToDo,
  selectedFilterOption,
} from "../features/todo/todoSlice";
import { useEffect } from "react";

const FilterButton = () => {
  const [option, setOption] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    const selectedOption = e.target.value;
    dispatch(selectedFilterOption(selectedOption)); 
  };

  useEffect(() => {
    dispatch(searchToDo(search));
  }, [search]);

  return (
    <div className="flex justify-between mt-5 items-center">
      {/* Filter section */}
      <div className="w-1/2">
        <select
          className="mr-2 p-0.5 rounded-md outline-none"
          onChange={handleFilterChange}
          // onClick={() => dispatch(selectedFilterOption(option))}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <button
          className="bg-purple-500 p-1 text-white rounded-md text-sm"
          onClick={() => dispatch(markAllAsCompleteToDo())}
        >
          Mark All Completed
        </button>
      </div>
      {/* Search section */}
      <div className="w-1/2 flex justify-end">
        <input
          className="w-1/2 px-2 outline-none rounded-md"
          type="text"
          placeholder="Search Todo"
          value={search}
          onChange={handleOnChange}
        />
        <button className="px-1.5 py-1 bg-blue-500 ml-2 rounded-md text-white">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default FilterButton;