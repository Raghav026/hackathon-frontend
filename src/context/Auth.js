import { createContext } from "react";

const intialState = { isAuthenticated: false };

export  const Authcontext = createContext(intialState);

