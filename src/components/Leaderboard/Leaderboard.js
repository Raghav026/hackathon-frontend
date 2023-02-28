import React, {useEffect, useState} from "react";
import AuthApi from "../../Api/AuthApi";
import './leaderboard.css'

const Leaderboard = () => {
  const [list,setList] = useState([])

  useEffect(()=>{
    AuthApi.get("/getscore").then((response)=>{
      setList([...response.data.data])

    }).catch((err)=>{
      console.log(err)
    })

  },[])
  const userList = list.map((data,idx)=> {
   return <div key={idx} className="leaderboard-div">
      <div>{data.name}</div>
      <div>{data.score}</div>
    </div>
  })
  return <div className="leaderboard-container">
    <div className="leaderboard-header">Leaderboard</div>
    <div className="leaderboard-header-2">
    <div>
      Name
    </div>
    <div>Score</div>
    </div>
    {userList}
  </div>
};

export default Leaderboard;
