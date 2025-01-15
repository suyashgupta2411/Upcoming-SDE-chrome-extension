import React from "react";

const SDEsheet = () => {
  return (
    <div className="w-full h-full ">
      <div className="grid grid-cols-5 grid-rows-3 gap-0 w-full h-full">
        <div className="col-start-1 col-end-3 row-start-1 row-end-4">
          <img
            src="TUF.png"
            className="w-full h-full object-contain"
            alt="TUF"
          />
        </div>
        <div className="col-start-3 col-end-6 row-start-1 row-end-2 flex items-center px-4">
          <a
            href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
            className="hover:border hover:border-white rounded-full py-2 px-6 text-left w-full whitespace-nowrap"
          >
            A2Z sheet
          </a>
        </div>
        <div className="col-start-3 col-end-6 row-start-2 row-end-3 flex items-center px-4">
          <a
            href="https://takeuforward.org/dbms/most-asked-dbms-interview-questions"
            className="hover:border hover:border-white rounded-full py-2 px-6 text-left w-full whitespace-nowrap"
          >
            CS core
          </a>
        </div>
        <div className="col-start-3 col-end-6 row-start-3 row-end-4 flex items-center px-4">
          <a
            href="https://takeuforward.org/system-design/complete-system-design-roadmap-with-videos-for-sdes"
            className="hover:border hover:border-white rounded-full py-2 px-6 text-left w-full whitespace-nowrap"
          >
            System Design
          </a>
        </div>
      </div>
    </div>
  );
};

export default SDEsheet;
