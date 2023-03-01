import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthApi from "../Api/AuthApi";
function ProtectedRoute({ children }) {
  const [element, setElement] = useState(<></>);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setElement(<Navigate to="/login" />);
      return;
    }
    AuthApi.get("/isauth", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
        console.log(response)
      if (response.data.success) {
        
        setElement(children);
      } else {
        setElement(<Navigate to="/login" />);
      }
    });
  }, []);

  return element;
}
export default ProtectedRoute;
