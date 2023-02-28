import { createContext } from "react";

const intialState = { isAuthenticated: false };

export default Authcontext = createContext(intialState);

