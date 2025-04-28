import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="mb-4 w-full relative">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
             focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
             transition-all duration-200 cursor-pointer
             appearance-none bg-white pr-10"
        id={name}
      >
        <option value="1" className="p-2 text-gray-400">
          Choose...
        </option>
        {[...Array(total).keys()].map((x, index) => (
          <option
            key={index + 1}
            value={x + 1}
            className="p-2 hover:bg-blue-100"
          >
            {name} - {x + 1}
          </option>
        ))}
      </select>

      {/* Chevron Down Custom */}
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default InputGroup;
