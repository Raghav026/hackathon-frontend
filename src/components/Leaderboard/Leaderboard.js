/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import AuthApi from "../../Api/AuthApi";
import "./leaderboard.css";
import ParticlesBg from "particles-bg";

const Leaderboard = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    AuthApi.get("/getscore")
      .then((response) => {
        setList([...response.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const userList = list.map((data, idx) => {
    return (
      <div key={idx} className="leaderboard-div">
        <div>{data.name}</div>
        <div>{data.score}</div>
      </div>
    );
  });
  return (
    <>
     <div className="leaderboard-bg">
        <div className="leaderboard-container">
          <div className="leaderboard-header">
              <img src="https://static.vecteezy.com/system/resources/previews/011/048/328/original/sports-championship-gold-trophy-icon-png.png" />
              Top Scorers
            
          </div>
          <div className="leaderboard-header-2">
            <div>Name</div>
            <div>Score</div>
          </div>
          <div className="userlist">{userList}</div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
