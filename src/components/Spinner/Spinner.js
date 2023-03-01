import React, { useContext } from "react";
import { LoadingContext } from "../../context/AppState";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import animationData from "./Spinner.json";
import "./spinner.css";
function Spinner() {
  let element = <></>;
  // const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin />;
  const { isLoading } = useContext(LoadingContext);
  console.log(isLoading);
  // if (isLoading) {
  //   element = <div className="spinner">{loadingIcon}</div>;
  // }
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
