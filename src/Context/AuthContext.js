import React, { useContext, useReducer, createContext ,useEffect} from "react";
import jwtDecode from "jwt-decode";

// interface State {
//         authenticated: boolean
//         jwt: String
// }

// interface Action {
//         type: string
//         payload: any
// }
const state = {
  authenticated: false,
  jwt: undefined,
};
const token = localStorage.getItem("token");
if (token) {
  console.log("the token is",token)
  const decodedToken = jwtDecode(token);
  const expiresAt = new Date(decodedToken.exp * 1000);

  if (new Date() > expiresAt) {
    localStorage.removeItem("token");
    state.authenticated = false;
    state.jwt = undefined;
  } else{
    state.authenticated = true;
    state.jwt = token;
  }
} else console.log("No token found");

const AuthStateContext = createContext(state);

const AuthDispatchContext = createContext(null);

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return {
        ...state,
        authenticated: true,
        jwt: payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        authenticated: false,
        jwt: undefined,
      };

    default:
      throw new Error(`Unknown action type ${type}`);
  }
};

//PROVIDE THE STATE TO THE PARENT

export const AuthProvider = ({ children }) => {
  const [state, dispatchDefault] = useReducer(AuthReducer, {
    authenticated: false,
    jwt: undefined,
  });



  const dispatch = (type, payload) => dispatchDefault({ type, payload });

  useEffect(() => {
    const token =window.localStorage.getItem("token");
    if(token){
      dispatch("LOG_IN",token);
    }
  }, [])

  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);
