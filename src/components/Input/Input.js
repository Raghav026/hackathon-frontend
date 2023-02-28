import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Navigate, useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import AuthApi from "../../Api/AuthApi";
import { MatchContext } from "../../context/Match";

function Input({ selectedDate,handleDateUpdate }) {


  const {matchInfo,setMatchInfo}=useContext(MatchContext)
  
  

    useEffect(() => {
    
      getdateInfo()
      
    }, []);

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)

  function getdateInfo() {
    const matchdate = selectedDate.getFullYear()+"-"+(selectedDate.getMonth()+1)+"-"+selectedDate.getDate()
    console.log(matchdate)
    const token = localStorage.getItem("token")
    console.log(token)
    AuthApi.get("/getmatchinfo",{
      headers:{
        'Authorization': `Bearer ${token}` ,
      },
      params: {
        matchdate:matchdate
      }
    })
    .then((res)=>{
      setMatchInfo({...matchInfo,...res.data})
      AuthApi.get("/getpredictionbymatch",{
        headers:{
          'Authorization': `Bearer ${token}` ,
        },
        params: {
          matchid:matchInfo.data.matchid
        }}).then((res)=>{
          console.log(res.data)
        })
    })
  }
  



  return (<div className="flex justify-center ">
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

        {/* <DatePicker type="date" selected={startDate} onChange={(e) => handleDateUpdate(e)} 
            className=" mt-20 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-900 dark:placeholder:text-neutral-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            /> */}
             <input
            onChange={(e) => handleDateUpdate(e)}
            type="date"
            value={selectedDate}
            className=" mt-20 peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-900 dark:placeholder:text-neutral-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Select a date"
          />
        <button onClick={getdateInfo} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded h-10 mt-12">Select</button>
         
        </div>
      </div>
      </div>
      
  );
}
export default Input;
