import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import HomePage from "./components/Homepage/HomePage";

import { MatchContext } from "./context/Match";
import { AuthContext } from "./context/Auth";

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

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [timer, SetTimer] = useState("");
  return (
    <div>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <MatchContext.Provider value={matchInfo}>
          {/* <Leaderboard /> */}
          <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {isAuthenticated ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/score" element={<Leaderboard />} />
              </>
            ) : (
              ""
            )}
          </Routes>
        </MatchContext.Provider>
      </AuthContext.Provider>

      {/* <Input matchInfo={matchInfo} setmatchInfo={setmatchInfo} /> */}

      {/* {matchInfo.result === "upcoming" && matchInfo.isupcoming ? <Card team1={team1} team2={team2} team1id={team1id} team2id={team2id} matchid={matchid} matchdate={matchdate} /> ? matchInfo.result==="done" :<Card /> : <Card/> } */}
    </div>
  );
}

export default App;
