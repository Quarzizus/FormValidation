import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { InputS } from "../styles/components/InputS.js";

const Input = () => {
  return (
    <InputS className="Container_input">
      <label htmlFor="usuario">Usuario</label>
      <div className="Input_wrapper">
        <input type="text" id="usuario" placeholder="Juanito" name="usuario" />
        <FontAwesomeIcon icon={faTimesCircle} className="Input_icon" />
      </div>
      <p>
        Esta es la leyenda Lorem ipsum dolor sit amet consectetur adipisicing
        elit.eaque o Inventore.
      </p>
    </InputS>
  );
};

export default Input;
