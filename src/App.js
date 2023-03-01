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

  
  return (
    <div>
<<<<<<< Updated upstream
      {/* <Leaderboard /> */}
      <div >
=======
      <div className="bg-Cricket">
>>>>>>> Stashed changes
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
                  theme={"dark"}
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
       </div>
    </div>
  );
}

export default App;
