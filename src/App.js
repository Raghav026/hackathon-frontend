import React, { useState, useEffect } from "react";
import axios from "axios";



import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard/Leaderboard";

import HomePage from "./components/Homepage/HomePage";
import { GlobalContext, MatchContext, PredictionContext } from "./context/Match";

function App() {
  const [matchInfo, setMatchInfo] = useState({
    success: true,
    data: {
      team1ID: "0d37134a-32b9-4a2a-9efb-873f38f927a1",
      team2ID: "f48dcf2c-7784-4c7e-85ef-c20c0308cc2f",
      team1Name: "LSG",
      team2Name: "DD",
      isdraw: false,
      match_date: "2023-2-28",
      matchid: "94fa3fc8-49ec-4412-95e4-4a030884cc3d",
      matchresult: "Upcoming Match",
      isUpcoming: true,
      isOngoing: false,
    },
  });
  const [predictionInfo,setPredictionInfo] =useState({
    
  })

  // const getmatch = () => {
  //   setMatchInfo({
  //     ...matchInfo,
  //     success: true,
  //     data: {
  //       team1ID: "0d37134a-32b9-4a2a-9efb-873f38f927a1",
  //       team2ID: "f48dcf2c-7784-4c7e-85ef-c20c0308cc2f",
  //       team1Name: "LSG",
  //       team2Name: "DD",
  //       isdraw: false,
  //       match_date: "2023-2-28",
  //       matchid: "94fa3fc8-49ec-4412-95e4-4a030884cc3d",
  //       matchresult: "Upcoming Match",
  //       isUpcoming: true,
  //       isOngoing: false,
  //     },
  //   });
  //   return matchInfo;
  // };

  // useEffect(() => {
  //   // const getmatchInfo = async () => {
  //   //   const res = await axios.get("http://127.0.0.1:5000/matchInfo");
  //   //   const data = await res.data;
  //   //   setmatchInfo(data);
  //   // };
  //   // getmatchInfo();

  //   console.log(matchInfo);
  // }, []);
  // console.log("matchInfo :", matchInfo);

  // ate } = matchInfo;
  // const [jwt, setJwt] = useState(storedJwt || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timer, SetTimer] = useState("");
  return (
    <div>
      {/* <Leaderboard /> */}
      <div className="bg-Cricket">
      

      <MatchContext.Provider value={{matchInfo,setMatchInfo}}>
        <PredictionContext.Provider value={{predictionInfo,setPredictionInfo}}>
        {/* <Leaderboard /> */}
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<HomePage />} />

          <Route path="/score" element={<Leaderboard />} />
        </Routes>
        </PredictionContext.Provider>
      </MatchContext.Provider>
      {/* <Input matchInfo={matchInfo} setmatchInfo={setmatchInfo} /> */}

      {/* {matchInfo.result === "upcoming" && matchInfo.isupcoming ? <Card team1={team1} team2={team2} team1id={team1id} team2id={team2id} matchid={matchid} matchdate={matchdate} /> ? matchInfo.result==="done" :<Card /> : <Card/> } */}
      </div>
      </div>
  );
}

export default App;
