import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center px-4 bg-white shadow-header h-14">
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <h1>Udemy Free Courses</h1>

        <div className="w-full max-w-[17rem]">
          <input
            type="text"
            placeholder="Search course..."
            className="block w-full p-2 pl-3 text-sm border rounded-md border-slate-200 focus:outline-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
