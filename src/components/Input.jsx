import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { InputS } from "../styles/components/InputS.js";

const Input = ({ name, placeholder, type, legend }) => {
  return (
    <InputS className="Container_input">
      <label htmlFor={name}>{name}</label>
      <div className="Input_wrapper">
        <input
          autoComplete="off"
          type={type}
          id={name}
          placeholder={placeholder}
          name={name}
        />
        <FontAwesomeIcon icon={faTimesCircle} className="Input_icon" />
      </div>
      <p>{legend}</p>
    </InputS>
  );
};

export default Input;
