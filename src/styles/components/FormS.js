import styled from "styled-components";

export const colors = {
  border: "#0087f6",
  success: "#0ad893",
  error: "#cf1d53",
};
export const font = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

export const FormS = styled.form`
  width: 70%;
  margin: 0 auto;
  padding: 50px 0 0 0;
  min-height: 100vh;
  max-height: auto;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 135px) 20px 150px;
  .TerminosCondiciones {
    margin: 0 10px 0 30px;
  }

  /* background-color: gray; */
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 135px) 20px 150px;
    width: 80%;
    .TerminosCondiciones {
      margin: 0 10px 0 0;
    }
  }
`;
