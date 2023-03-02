import React, { useEffect, useContext, useState } from "react";
import "./input.css";

import AuthApi from "../../Api/AuthApi";
import { MatchContext, PredictionContext } from "../../context/Match";
import { LoadingContext } from "../../context/AppState";
import { toast } from "react-toastify";
import Confettis from "../Confettis";
function Input({ selectedDate, handleDateUpdate ,setIsExploding }) {
  const { setIsLoading } = useContext(LoadingContext);
  const { setMatchInfo } = useContext(MatchContext);
  const { predictionInfo, setPredictionInfo } = useContext(PredictionContext);
  
  useEffect(() => {
    getdateInfo();
  }, []);

  function getdateInfo() {
    const date = new Date(selectedDate);
    const matchdate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(matchdate);
    const token = localStorage.getItem("token");
    console.log(token);
    setIsLoading(true);
    setIsExploding(false)
    AuthApi.get("/getmatchinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        matchdate: matchdate,
      },
    })
      .then((res1) => {
        let flag = false;
        setIsLoading(false);
        if (!res1.data.success) {
          flag = true;
          toast.error(res1.data.data);
          return;
        }
        if (flag) return;
        setMatchInfo((prevstate) => ({ ...prevstate, ...res1.data }));
        const matchid = res1.data.data.matchid;
        AuthApi.get("/getpredictionbymatch", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            matchid: matchid,
          },
        }).then((res2) => {
          if (!res2.data.data) {
            setPredictionInfo({
              ...predictionInfo,
              done: false,
              prediction: "",
            });
            return;
          }
          console.log(res2.data.data)
          console.log(res1.data.data)
          if(res2.data.data.teamid===res1.data.data.winnerID) {
            setIsExploding(true)
          }
          console.log(res2.data.data.teamid);
          setPredictionInfo({
            ...predictionInfo,
            done: true,
            prediction: res2.data.data.teamid,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
    <div className="inputbox">
      <input
        onChange={(e) => handleDateUpdate(e)}
        type="date"
        value={selectedDate}
      />
      <button onClick={getdateInfo}>Search</button>
    </div>
    </>
  );
}
export default Input;
