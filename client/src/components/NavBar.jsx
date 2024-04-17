import React from "react";

const NavBar = ({ onLogout }) => {
  const userEmail = true;
  return (
    <nav className="bg-gray-800 p-2 w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          {userEmail && (
            <span className="text-white">Logged in as: 12345@mail.com</span>
          )}
        </div>
        <div>
          {userEmail && (
            <button
              onClick={onLogout}
              className="bg-transparent border border-red-500 hover:bg-red-500 text-white hover:text-white font-bold py-2 px-4 rounded outline-none focus:outline-none"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;