import React, { useContext } from "react";
import { LoadingContext } from "../../context/AppState";
import Lottie from "react-lottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import animationData from "./Spinner.json";
import "./spinner.css";
function Spinner() {
    let element = <></>;
    const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin />;
    const { isLoading } = useContext(LoadingContext)
    
    if (isLoading) {
      element = <div className="spinner">{loadingIcon}</div>;
    }
    return element;
}

export default Spinner;
