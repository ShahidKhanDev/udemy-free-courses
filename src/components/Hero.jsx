import React, { useState } from "react";

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="hero min-h-[60vh] bg-blue-500 flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center h-full max-w-6xl px-4 mx-auto lg:px-0">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white font-degular md:text-5xl lg:text-6xl">
            Udemy Free Courses
          </h1>

          <p className="mt-2 text-lg text-white">
            Get access to fully free courses with certification from Udemy!
          </p>
        </div>

        <div className="w-full max-w-[30rem] mt-10 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search course..."
            className="block w-full p-3 pl-5 pr-16 text-base border rounded-full placeholder:text-sm focus:outline-blue-300 font-inter"
          />

          <div className="absolute flex items-center justify-center gap-1 overflow-hidden -translate-y-1/2 bg-blue-100 rounded-full right-1 top-1/2">
            {searchTerm && (
              <button
                onClick={() => {
                  onSearch("");
                  setSearchTerm("");
                }}
                className={`p-2.5 bg-blue-200 rounded-full`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="Menu / Close_SM">
                      <path
                        id="Vector"
                        d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-blue-700"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            )}

            <button
              onClick={() => onSearch(searchTerm)}
              className="p-2.5 bg-blue-200 rounded-full "
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-blue-700"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>

          {/* <button
            onClick={() => {
              onSearch("");
              setSearchTerm("");
            }}
          >
            All Courses
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
