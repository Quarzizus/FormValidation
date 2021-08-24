import { colors, font } from "./FormS";
import styled from "styled-components";

export const InputS = styled.article`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.1);
  label {
    font-size: 1.2rem;
    font-weight: 500;
  }
  .Input_wrapper {
    position: relative;
    background-color: red;
    width: auto;

    input {
      width: 100%;
      height: 40px;
      padding: 0 15px;
      border: 3px solid transparent;
      font-family: ${font};
    }
    input:focus {
      outline: 2px solid
        ${(props) => (props.status ? colors.success : colors.error)};
    }
    input:focus + .Input_icon {
      color: ${(props) => (props.status ? colors.success : colors.error)};
    }
    .Input_icon {
      position: absolute;
      right: 15px;
      top: calc(32px - 50%);
      color: ${(props) => (props.status ? colors.success : colors.error)};
    }
  }
  p {
    font-size: 0.9rem;
    color: ${colors.error};
  }
  @media screen and (max-width: 800px) {
    padding: 10px 20px;
  }
`;
