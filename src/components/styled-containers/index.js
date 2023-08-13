import styled from "styled-components";
import { theme } from "../../styles";

export const CenteredPageContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export const FormContainer = styled.div`
  min-width: 40vw;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 10px;
  padding: 10px;

  input,
  p, button {
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  border-radius: 10px;
  background-color: ${theme.colors.laranja["500"]};
  width: 100%;
  color: white;

  &:hover {
    background-color: white;
    color: c;
    border: 3px solid #fe7e02;
  }
`;

export const ButtonContainer2 = styled.div`
  width: 100%;
  background-color: white;
  color: ${theme.colors.laranja["500"]};

  &:hover {
    font-weight: normal;
    color: black;
    text-decoration: underline;
    border: 1px solid gray;
  }
`;
