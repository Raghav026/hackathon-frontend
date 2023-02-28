import React, { useState, useEffect } from "react";
import axios from "axios";

function Input({ matchInfo, setmatchInfo }) {
  var date = new Date();
  const [selectedDate, setSelectedDate] = useState(date);
  const handleDateUpdate = (e) => {
    //console.log(e.target.value)
    var currentDate = new Date(e.target.value);
    currentDate.setDate(currentDate.getDate());
    setSelectedDate((state) => currentDate);
    console.log(selectedDate);
  };

  //   useEffect(() => {
  //     const getmatchInfo = async () => {
  //       const res = await axios.get("http://127.0.0.1:5000/getmatchinfo");
  //       const data = await res.data;
  //       setmatchInfo(data);
  //     };
  //     getmatchInfo();
  //   }, []);

  return (
    <div className="flex justify-center">
      <div
        className="relative mb-3 xl:w-96"
        data-te-datepicker-init
        data-te-input-wrapper-init
      >
        <label
          htmlFor="floatingInput"
          className="mt-10 text-2xl pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-900 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-900 dark:peer-focus:text-black-900"
        >
          Select a date
        </label>
        <div className="flex">
          <input
            onChange={(e) => handleDateUpdate(e)}
            type="date"
            value={selectedDate}
            class=" mt-20 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-900 dark:placeholder:text-neutral-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Select a date"
          />
        </div>
      </div>
    </div>
  );
}
export default Input;
