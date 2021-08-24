import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { SubmitS } from "../styles/components/SubmitS.js";
import AppContext from "../context/AppContext";

const Submit = () => {
  const [state, dispatch] = useContext(AppContext);
  const handleChecked = ({ target }) => {
    dispatch({
      type: "Checked",
      payload: target.checked,
    });
  };
  const handleSubmit = () => {
    const validation = Object.values(state).every(
      (input) => input.status === true
    );
    validation
      ? dispatch({
          type: "Validate",
          payload: true,
        })
      : dispatch({
          type: "Validate",
          payload: false,
        });
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          className="TerminosCondiciones"
          onClick={handleChecked}
        />
        Acepto los Terminos y Condiciones
      </div>
      <SubmitS>
        {state["Validate"] !== null ? (
          !state["Validate"] ? (
            <p>
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className="Icon-Warning"
              />
              Error: Please fill the form correctly
            </p>
          ) : null
        ) : null}
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </SubmitS>
    </>
  );
};

export default Submit;
