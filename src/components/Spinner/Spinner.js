import React, { useContext } from "react";
import { LoadingContext } from "../../context/AppState";
import Lottie from "react-lottie";
import animationData from "./Spinner.json";
import "./spinner.css";
function Spinner() {

  const { isLoading } = useContext(LoadingContext);
  return isLoading ? (
    <div className="spinner">
      <Lottie
        options={{ animationData: animationData, loop: true }}
        height={400}
        width={400}
      />
    </div>
  ) : null;
}
export default Spinner;