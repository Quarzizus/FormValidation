import styled from "styled-components";
import { colors, font } from "../components/FormS.js";

export const SubmitS = styled.section`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 115px;
  p {
    background-color: ${colors.error};
    color: white;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    .Icon-Warning {
      margin: 0 10px;
    }
  }
  button {
    background-color: black;
    width: 200px;
    height: 40px;
    border: none;
    color: white;
    font-family: ${font};
    font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    & {
      grid-column: 1/2;
    }
  }
`;
