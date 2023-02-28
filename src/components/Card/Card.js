import React from "react";
import CountDown from "../Timmer/CountDown";

const Card = () => {
  return (
    <div className="flex justify-center align-center mt-20 h-90 w-90">
      <div className="w-full max-w-sm bg-dark border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Today's Match
          </h5>
          <span className="text-xl text-gray-500 dark:text-gray-400 mb-2">
            RCB VS CSK
          </span>
          <div className="flex mt-4 space-x-9 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              RCB
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              CSK
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Draw
            </button>
          </div>
          <CountDown timer="2023-02-25" />
        </div>
      </div>
    </div>
  );
};

export default Card;
