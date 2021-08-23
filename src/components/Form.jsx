import React from "react";
import { FormS } from "../styles/components/FormS.js";
import Input from "../components/Input";
import Submit from "../components/Submit";

const Form = () => {
  return (
    <FormS>
      <Input
        placeholder="MargaZ"
        name="Usuario"
        type="text"
        legend="Your user must have 3 or more letters"
      />
      <Input
        placeholder="Margaret"
        name="Name"
        type="text"
        legend="Your name can't have special chatacters and it must have 3 or more letters"
      />
      <Input
        placeholder=""
        name="Password"
        type="password"
        legend="Your password must have one special character, one number and minimum, four letters. "
      />
      <Input
        placeholder=""
        name="Repeat Password"
        type="password"
        legend="It's no matches"
      />
      <Input
        placeholder="margaret@example.com"
        name="Email"
        type="email"
        legend="Type a correct email"
      />
      <Input
        placeholder="3105376254"
        name="Phone"
        type="tel"
        legend="The phone number must be equal to 10 numbers"
      />
      <Submit />
    </FormS>
  );
};

export default Form;
