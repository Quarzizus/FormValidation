import styled from "styled-components";

export const colors = {
  border: "#0087f6",
  success: "#190E4F",
  error: "#E3170A",
};
export const font = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

export const FormS = styled.form`
  width: 70%;
  margin: 0 auto;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 160px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(100px, 160px);
  }
`;
