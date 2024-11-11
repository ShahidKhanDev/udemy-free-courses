import React from "react";

const Footer = () => {
  return (
    <footer className="z-20 flex items-center justify-center w-full p-4 bg-white border-t border-gray-200 shadow dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} Developed with ❤️ by{" "}
        <span className="font-semibold text-blue-500">Shahid Ullah Safi</span>
      </span>
    </footer>
  );
};

export default Footer;
