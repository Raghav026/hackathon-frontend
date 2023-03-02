/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import AuthApi from "../../Api/AuthApi";
import { MatchContext, PredictionContext } from "../../context/Match";
import {
  isOngoing,
  isPreviousDay,
  isToday,
  isTodayAndDone,
} from "../../Helper/dateHelper";
import CountDown from "../Timer/CountDown";
import "./card.css";
import imagemap from "../../Image map/ImageMap";
import { toast } from "react-toastify";

const Card = () => {
  const { matchInfo } = useContext(MatchContext);
  const { predictionInfo, setPredictionInfo } = useContext(PredictionContext);
  const timer = matchInfo.data.match_date;
  const matchresult = matchInfo.data.matchresult;
  const obj = matchInfo;
  const [match, setMatch] = useState(<></>);
  const [prediction, setPrediction] = useState(<></>);
  function createPrediction(teamid) {
    const token = localStorage.getItem("token");
    AuthApi.post(
      "/createprediction",
      {
        matchid: matchInfo.data.matchid,
        teamid: teamid,
        isdraw: teamid ? false : true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      const winnerID = teamid;
      toast.success("Prediction Done")
      setPredictionInfo({ done: true, prediction: winnerID });
    });
  }

  const date = new Date(timer);
  useEffect(() => {
    if (isTodayAndDone(date) || isPreviousDay(date)) {
      setMatch(<p className="matchresult">{matchresult}</p>);
    } else if (isToday(date) && isOngoing()) {
      setMatch(<p className="matchresult">{matchresult}</p>);
    } else {
      setMatch(<CountDown timer={date} />);
    }
    if (isTodayAndDone(date) || isPreviousDay(date)) {
      setPrediction(<p className="matchresult">No predictions</p>);
    } else if (!predictionInfo.done) {
      setPrediction(
        <div className="prediction-section">
          <div>Choose Your Team Now!</div>
          <div className="prediction-buttons">
            <button onClick={() => createPrediction(matchInfo.data.team1ID)}>
              {obj.data.team1Name}
            </button>
            <button onClick={() => createPrediction(matchInfo.data.team2ID)}>
              {obj.data.team2Name}
            </button>
          </div>
        </div>
      );
    } else if (predictionInfo.done && !predictionInfo.prediction) {
      setPrediction(
        <p className="userprediction">You predicted match drawn</p>
      );
    } else {
      const winnerName =
        matchInfo.data.team1ID === predictionInfo.prediction
          ? matchInfo.data.team1Name
          : matchInfo.data.team2Name;
      setPrediction(
        <p className="matchresult">{"You predicted " + winnerName}</p>
      );
    }
  }, [matchInfo]);
  useEffect(() => {
    console.log(predictionInfo);

      if (!predictionInfo.done) {
        if (isTodayAndDone(date) || isPreviousDay(date)) {
          setPrediction(<p className="userprediction">Prediction Time Over!</p>);
          return
        }
      setPrediction(
        <div className="prediction-section">
          <div>Choose Your Team Now!</div>
          <div className="prediction-buttons">
            <button onClick={() => createPrediction(matchInfo.data.team1ID)}>
              {obj.data.team1Name}
            </button>
            <button onClick={() => createPrediction(matchInfo.data.team2ID)}>
              {obj.data.team2Name}
            </button>
          </div>
        </div>
      );
    } else if (predictionInfo.done && !predictionInfo.prediction) {
      setPrediction(
        <p className="userprediction">You predicted match drawn</p>
      );
    } else {
      const winnerName =
        matchInfo.data.team1ID === predictionInfo.prediction
          ? matchInfo.data.team1Name
          : matchInfo.data.team2Name;
      setPrediction(
        <p className="userprediction">{"You predicted " + winnerName}</p>
      );
    }
  }, [predictionInfo]);

  return (
    <div className="card-holder">
      <div className="card-body">
        <h5>Match Details</h5>
        
        <div className="card-images">
          <img src={imagemap[obj.data.team1Name.toLowerCase()]} />
          <p>VS</p>
          <img src={imagemap[obj.data.team2Name.toLowerCase()]} />
        </div>
        {match}
        {prediction}
      </div>
    </div>
  );
};

export default Card;
