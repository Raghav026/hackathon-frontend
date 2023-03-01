import React, { useContext } from 'react'
import { LoadingContext } from '../../context/AppState';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./spinner.css"
function Spinner() {
    let element = <></>;
    const loadingIcon = <FontAwesomeIcon icon={faSpinner} spin />;
    const { isLoading } = useContext(LoadingContext)
    console.log(isLoading)
    if (isLoading) {
      element = <div className="spinner">{loadingIcon}</div>;
    }
    return element;
}

export default Spinner