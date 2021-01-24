import { useReducer, createContext, useContext } from "react";
import Cookie from "js-cookie";

const initialState = {
  token: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOKEN":
      return {
        token: action.payload,
      };

    case "REMOVE_TOKEN":
      return {
        token: action.payload,
      };

    default:
      return state;
  }
};

export const useCookies = (cookies) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...cookies,
  });

  return {
    state,
    actions: {
      addCookie: (token) => {
        Cookie.set("token", token);
        dispatch({ type: "ADD_TOKEN", payload: token });
      },
      removeCookie: () => {
        Cookie.remove("token");
        dispatch({ type: "REMOVE_TOKEN", payload: "" });
      },
    },
  };
};

export const CookiesContext = createContext({
  state: initialState,
  actions: {
    addCookie: (token) => {},
    removeCookie: () => {},
  },
});

export const useCookiesContext = () => useContext(CookiesContext);
