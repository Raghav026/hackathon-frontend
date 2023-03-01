import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import BPL from "./components/BPL/BPL";
import HomePage from "./components/Homepage/HomePage";
import { MatchContext, PredictionContext } from "./context/Match";
import { LoadingContext, ErrorContext } from "./context/AppState";
import ProtectedRoute from "./components/ProtectedRoute";
import Spinner from "./components/Spinner/Spinner";
function App() {
  const [matchInfo, setMatchInfo] = useState({
    success: true,
    data: {
      team1ID: "",
      team2ID: "f",
      team1Name: "-",
      team2Name: "-",
      isdraw: false,
      match_date: "",
      matchid: "",
      matchresult: "",
      isUpcoming: true,
      isOngoing: false,
    },
  });
  const [predictionInfo, setPredictionInfo] = useState({
    done: false,
    prediction: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

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
  return (
    <div>
      {/* <Leaderboard /> */}
      <div className="bg-Cricket">
        <MatchContext.Provider value={{ matchInfo, setMatchInfo }}>
          <PredictionContext.Provider
            value={{ predictionInfo, setPredictionInfo }}
          >
            <LoadingContext.Provider value={{ setIsLoading, isLoading }}>
              <ErrorContext.Provider value={{ setError, error }}>
                <Spinner />
                <ToastContainer
                  limit={5}
                  autoClose={2500}
                  closeOnClick={true}
                />

                <Routes>
                  <Route path="/" element={<Navigate to="/login" />}></Route>
                  <Route path="/register" element={<Signup />} />
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/bpl"
                    element={
                      <ProtectedRoute>
                        <BPL />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<HomePage />} />

                    <Route path="score" element={<Leaderboard />} />
                  </Route>

                  <Route path="*" element={<div>Page not found</div>} />
                </Routes>
              </ErrorContext.Provider>
            </LoadingContext.Provider>
          </PredictionContext.Provider>
        </MatchContext.Provider>
        {/* <Input matchInfo={matchInfo} setmatchInfo={setmatchInfo} /> */}

        {/* {matchInfo.result === "upcoming" && matchInfo.isupcoming ? <Card team1={team1} team2={team2} team1id={team1id} team2id={team2id} matchid={matchid} matchdate={matchdate} /> ? matchInfo.result==="done" :<Card /> : <Card/> } */}
      </div>
    </div>
  );
}

export default App;
