import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./bpl.css";
function BPL() {
  return (
    <>
      <div className="navbar">
        <NavLink className={"navdiv"} to={""}>
          <div>Home</div>
        </NavLink>
        <NavLink className={"navdiv"} to={"score"}>
          <div>Leaderboard</div>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default BPL;
