import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { InputS } from "../styles/components/InputS.js";
import AppContext from "../context/AppContext.js";
const Input = ({ name, placeholder, type, legend, expression }) => {
  const [state, dispatch] = useContext(AppContext);

  const handleValidation = () => {
    name === "PasswordRepeat"
      ? dispatch({
          type: "PasswordRepeat",
          payload: {
            ...state["PasswordRepeat"],
            status: state["Password"].value === state["PasswordRepeat"].value,
          },
        })
      : dispatch({
          type: name,
          payload: {
            ...state[name],
            status: expression.test(state[name].value),
          },
        });
  };
  const handleChange = ({ target }) => {
    dispatch({
      type: name,
      payload: { ...state[name], value: target.value },
    });
  };

  return (
    <InputS className="Container_input" status={state[name].status}>
      <label htmlFor={name}>{name}</label>
      <div className="Input_wrapper">
        <input
          autoComplete="off"
          type={type}
          id={name}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
          onBlur={handleValidation}
          onKeyUp={handleValidation}
        />
        {state[name].status !== null ? (
          <FontAwesomeIcon
            icon={state[name].status === false ? faTimesCircle : faCheckCircle}
            className="Input_icon"
          />
        ) : null}
      </div>
      {state[name].status !== null ? (
        !state[name].status ? (
          <p>{legend}</p>
        ) : null
      ) : null}
    </InputS>
  );
};

export default Input;
