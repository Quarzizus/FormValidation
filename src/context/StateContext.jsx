import AppContext from "./AppContext";
import React, { useReducer } from "react";
import FormReducer, { formValues } from "./FormReducer";

const StateContext = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, formValues);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
