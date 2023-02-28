import { createContext } from "react";

const intialState = { isAuthenticated: false };

export const AuthContext = createContext(intialState);
