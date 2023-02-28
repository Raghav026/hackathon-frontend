import React, { useContext, useEffect, useState } from "react";
import AuthApi from "../../Api/AuthApi";
import { MatchContext, PredictionContext } from "../../context/Match";
import {
  isOngoing,
  isPreviousDay,
  isToday,
  isTodayAndDone,
  isUpcomingDay,
} from "../../Helper/dateHelper";
import CountDown from "../Timer/CountDown";
import "./card.css";

const Card = () => {
  const { matchInfo } = useContext(MatchContext);
  const { predictionInfo } = useContext(PredictionContext);
  let showPrediction = false;
  const timer = matchInfo.data.match_date;
  const isUpcoming = matchInfo.data.isUpcoming;
  const isongoing = matchInfo.data.isOngoing;
  const matchresult = matchInfo.data.matchresult;
  const obj = matchInfo;
  let match = <></>;
  function createPrediction(teamid) {
    const token = localStorage.getItem("token");
    AuthApi.post(
      "/createprediction",
      {
        matchid: matchInfo.data.matchid,
        teamid,
        isdraw: teamid ? false : true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      const res = response.data.data;
      if(!res) {
        
      }



    });
  }
  let prediction = (
    <div className="flex mt-4 space-x-9 md:mt-6">
      <button
        onClick={createPrediction(matchInfo.data.team1ID)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {obj.data.team1Name}
      </button>
      <button
        onClick={createPrediction(null)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Draw
      </button>
      <button
        onClick={createPrediction(matchInfo.data.team2ID)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {obj.data.team2Name}
      </button>
    </div>
  );
  const date = new Date(timer);
  console.log("deadline", date);
  useEffect(() => {
    if (isTodayAndDone(date) || isPreviousDay(date)) {
      match = <p className="matchresult">{matchresult}</p>;
      showPrediction = false;
    } else if (isToday(date) && isOngoing()) {
      match = <p className="matchresult">{matchresult}</p>;
      showPrediction = false;
    } else {
      console.log("abc");
      match = <CountDown timer={date} />;
      showPrediction = true;
    }
  }, [matchInfo]);
  if (isTodayAndDone(date) || isPreviousDay(date)) {
    match = <p className="matchresult">{matchresult}</p>;
    showPrediction = false;
  } else if (isToday(date) && isOngoing()) {
    match = <p className="matchresult">{matchresult}</p>;
    showPrediction = false;
  } else {
    match = <CountDown timer={date} />;
    showPrediction = true;
  }

  // const alreadyDone = isPreviousDay(timer)
  // const TodayAndDone = isTodayAndDone(timer)
  // const
  return (
    <div className="flex justify-center align-center mt-20 h-90 w-90">
      <div className="w-full max-w-sm bg-dark border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-4xl font-bold text-gray-900 dark:text-white mb-10">
            Match Details
          </h5>
          <span className="text-xl text-gray-500 dark:text-gray-400 mb-2">
            {obj.data.team1Name} VS {obj.data.team2Name}
          </span>
          {showPrediction && prediction}
          {match}
          {/* <CountDown timer={date} /> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
