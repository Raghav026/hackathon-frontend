import React, { useState, useEffect } from "react";
import axios from "axios";



import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import CountDown from "./components/Timmer/CountDown";
import HomePage from "./components/Homepage/HomePage";

function App() {
  // const [matchInfo, setmatchInfo] = useState(null);
  // useEffect(() => {
  //   const getmatchInfo = async () => {
  //     const res = await axios.get("http://127.0.0.1:5000/matchInfo");
  //     const data = await res.data;
  //     setmatchInfo(data);
  //   };
  //   getmatchInfo();
  // }, []);
  // const { team1, team2, team1id, team2id, matchid, matchdate } = matchInfo;
  // const [jwt, setJwt] = useState(storedJwt || null);

  return (
    <div>
      {/* <Leaderboard /> */}
      <div className="bg-Cricket">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/score" element={<Leaderboard />} />
      </Routes>
      {/* <Input matchInfo={matchInfo} setmatchInfo={setmatchInfo} /> */}

      {/* {matchInfo.result === "upcoming" && matchInfo.isupcoming ? <Card team1={team1} team2={team2} team1id={team1id} team2id={team2id} matchid={matchid} matchdate={matchdate} /> ? matchInfo.result==="done" :<Card /> : <Card/> } */}
      </div>
      </div>
  );
}

export default App;
