import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { SubmitS } from "../styles/components/SubmitS.js";

const Submit = () => {
  return (
    <>
      <div>
        <input type="checkbox" className="TerminosCondiciones" /> Acepto los
        Terminos y Condiciones
      </div>
      <SubmitS>
        <p>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="Icon-Warning"
          />
          Error: Please fill the form correctly
        </p>
        <button type="button">Send</button>
      </SubmitS>
    </>
  );
};

export default Submit;
